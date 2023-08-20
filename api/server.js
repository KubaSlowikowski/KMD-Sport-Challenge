require('dotenv').config();
const { connectToDatabase, closeClient } = require('./db/database');
const express = require('express');
const axios = require('axios');
const app = express();
const StravaApiV3 = require('strava_api_v3');
const logger = require('morgan');
const { refreshToken, isTokenExpired } = require("./oauth");
const { ENDPOINTS, GRANT_TYPES, SCOPES } = require("./utils/utils");
const { getChallengeStartTimestamp } = require("./config");

app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static("public"))
app.listen(3000, () => console.log('Server listening on http://localhost:3000'));

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/athlete/activities/:athleteId', async (req, res) => {
        const athleteId = Number(req.params.athleteId);

        // get access tokens from db
        const athlete = await findAthlete(athleteId);

        if (!athlete) {
            res.status(404).send('Athlete not found');
        }

        let access_token = athlete.access_token;
        if (isTokenExpired(athlete.expires_at)) {
            try {
                access_token = await refreshToken(athlete.refresh_token, athleteId);
            } catch (err) {
                if (err.response.status === 400) {
                    res.redirect('/login');
                } else {
                    res.send('Error retrieving access token')
                }
            }
        }

        try {
            const response = await axios.get(ENDPOINTS.STRAVA_ATHLETE_ACTIVITIES, {
                params: { per_page: 1 },
                headers: { Authorization: `Bearer ${access_token}` }
            })
            res.send(response.data)
        } catch {
            res.status(500).send('error')
        }
    }
)

app.get('/challenge/activities', async (req, res) => {
    const database = await connectToDatabase();
    const athletesCollection = database.collection("athletes");

    const athletesCursor = athletesCollection.find();

    const activities = [];
    for await (const athlete of athletesCursor) {
        let access_token = athlete.access_token;
        if (isTokenExpired(athlete.expires_at)) {
            access_token = await refreshToken(athlete.refresh_token, athlete.athleteId);
        }
        try {
            const response = await axios.get(ENDPOINTS.STRAVA_ATHLETE_ACTIVITIES, {
                params: { after: getChallengeStartTimestamp() },
                headers: { Authorization: `Bearer ${access_token}` }
            });
            if (response.data.length > 0) {
                activities.push(response.data);
            }
        } catch (error) {
            console.dir(error);
        }
    }

    res.send(activities);
})


app.get('/login', (req, res) => {
    const authorizeEndpoint = ENDPOINTS.STRAVA_AUTHORIZE;

    const queryParams = new URLSearchParams({
        client_id: process.env.CLIENT_ID,
        response_type: 'code',
        redirect_uri: process.env.REDIRECT_URI,
        approval_prompt: 'force',
        scope: `${SCOPES.READ},${SCOPES.ACTIVITY_READ}`
    })

    const url = `${authorizeEndpoint}?${queryParams}`
    res.redirect(url);
})

app.get('/callback', async (req, res) => {
    // TODO check user accepted scopes

    const tokenEndpoint = ENDPOINTS.STRAVA_TOKEN

    if (req.query.error === 'access_denied') {
        res.redirect('/login');
    }

    const { code } = req.query // authorization code

    const requestBody = {
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
        code,
        grant_type: GRANT_TYPES.AUTHORIZATION_CODE,
    }

    try {
        const response = await axios.post(tokenEndpoint, requestBody)
        const { token_type, access_token, refresh_token, expires_at, expires_in, athlete } = response.data;

        const database = await connectToDatabase();
        const athletesCollection = database.collection("athletes");

        const data = {
            token_type: token_type,
            access_token: access_token,
            refresh_token: refresh_token,
            expires_at: expires_at,
            expires_in: expires_in,
            athleteId: athlete.id,
            name: `${athlete.firstname} ${athlete.lastname}`,
        };
        const result = await athletesCollection.updateOne({ athleteId: data.athleteId }, { $set: data }, { upsert: true });
        if (result.acknowledged) console.log(`User '${data.name}' registered.`)

        res.send({
            athleteName: data.name,
            athleteId: data.athleteId
        });
    } catch (err) {
        res.send('Error retrieving access token')
    }
})

app.get('/athlete', async (req, res) => {
    var defaultClient = StravaApiV3.ApiClient.instance;

    // Configure OAuth2 access token for authorization: strava_oauth
    var strava_oauth = defaultClient.authentications['strava_oauth'];
    strava_oauth.accessToken = null;

    var apiInstance = new StravaApiV3.AthletesApi();

    var callback = function(error, data, response) {
        if (error) {
            if (error.status === 401) {
                res.redirect('/login');
            }
        } else {
            res.send(`Hello ${data.firstname} ${data.lastname}`);
        }
    };
    apiInstance.getLoggedInAthlete(callback);
})

/**
 * Find athlete from database by his ID.
 * @param athleteId Athlete ID.
 * @return {Promise<*>} Returns promise with athlete (if exists), otherwise null.
 */
async function findAthlete(athleteId) {
    const database = await connectToDatabase();
    const athletesCollection = database.collection("athletes");
    return athletesCollection.findOne({ athleteId: athleteId });
}

async function cleanup() {
    await closeClient();
    process.exit();
}

process.on('SIGINT', cleanup);
process.on('SIGTERM', cleanup);
