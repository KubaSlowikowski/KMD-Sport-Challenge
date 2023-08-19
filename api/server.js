require('dotenv').config();
const { connectToDatabase, closeClient } = require('./db/database-config');
const express = require('express');
const axios = require('axios');
const app = express();
var StravaApiV3 = require('strava_api_v3');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static("public"))
app.listen(3000, () => console.log('Server listening on http://localhost:3000'));


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/club/activities/:athleteId', async (req, res) => {
    const { athleteId } = req.params;

    // get access tokens from db
    const database = await connectToDatabase();
    const athletesCollection = database.collection("athletes");

    // refresh in case of token expired

    // get data from strava

    res.send('dudd')
})


app.get('/login', (req, res) => {
    const authorizeEndpoint = 'https://www.strava.com/oauth/authorize'

    const queryParams = new URLSearchParams({
        client_id: process.env.CLIENT_ID,
        response_type: 'code',
        redirect_uri: process.env.REDIRECT_URI,
        approval_prompt: 'force',
        scope: 'read,activity:read' // read public segments, public routes, public profile data, public posts, public events, club feeds, and leaderboards
    })

    const url = `${authorizeEndpoint}?${queryParams}`
    res.redirect(url);
})

app.get('/callback', async (req, res) => {
    const tokenEndpoint = 'https://www.strava.com/oauth/token'

    if (req.query.error === 'access_denied') {
        res.redirect('/');
    }

    const { code } = req.query // authorization code

    const requestBody = {
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
        code,
        grant_type: 'authorization_code',
        redirect_uri: process.env.REDIRECT_URI
    }

    try {
        const response = await axios.post(tokenEndpoint, requestBody)
        const { token_type, access_token, refresh_token, expires_at, expires_in, athlete } = response.data;

        const database = await connectToDatabase();
        const athletesCollection = database.collection("athletes");

        const data = {
            token_type: token_type,
            accessToken: access_token,
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
    // strava_oauth.accessToken = req.session.accessToken;
    strava_oauth.accessToken = null;

    var apiInstance = new StravaApiV3.AthletesApi();

    var callback = function(error, data, response) {
        if (error) {
            if (error.status === 401) {
                res.redirect('/login');
            }
        } else {
            res.send(`Hello ${data.firstname} ${data.lastname}`);
            // console.log(data);
        }
    };
    apiInstance.getLoggedInAthlete(callback);
})

async function cleanup() {
    console.log('cleanup')
    await closeClient();
    process.exit();
}

process.on('SIGINT', cleanup);
process.on('SIGTERM', cleanup);
