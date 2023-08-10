require('dotenv').config();
const {} = require('./db/database-config');
const express = require('express');
const session = require('express-session');
const axios = require('axios');
const app = express();
var StravaApiV3 = require('strava_api_v3');


app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static("public"))
app.use(session({ // middleware, which is required to manage user sessions
    secret: process.env.CLIENT_SECRET,
    resave: false,
    saveUninitialized: true
}))

app.listen(3000, () => console.log('Server listening on http://localhost:3000'));

app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.get('/login', (req, res) => {
    const authorizeEndpoint = 'https://www.strava.com/oauth/authorize'

    const queryParams = new URLSearchParams({
        client_id: process.env.CLIENT_ID,
        response_type: 'code',
        redirect_uri: process.env.REDIRECT_URI,
        approval_prompt: 'force',
        scope: 'read' // read public segments, public routes, public profile data, public posts, public events, club feeds, and leaderboards
    })

    const url = `${authorizeEndpoint}?${queryParams}`
    res.redirect(url);
})

app.get('/callback', async (req, res) => {
    const tokenEndpoint = 'https://www.strava.com/oauth/token'

    if (req.query.error === 'access_denied') {
        res.redirect('/');
    }

    const {code} = req.query // authorization code

    const requestBody = {
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
        code,
        grant_type: 'authorization_code',
        redirect_uri: process.env.REDIRECT_URI
    }

    try {
        const response = await axios.post(tokenEndpoint, requestBody)
        req.session.accessToken = response.data.access_token
        req.session.refreshToken = response.data.refresh_token

        res.redirect('/athlete')

    } catch (err) {
        res.send('Error retrieving access token')
    }
})

app.get('/athlete', async (req, res) => {
    const userEndpoint = 'https://www.strava.com/api/v3/athlete'

    const options = {
        headers: {
            Authorization: `Bearer ${req.session.accessToken}`
        },
        json: true
    }

    try {
        const response = await axios.get(userEndpoint, options)
        res.send(response.data)
    } catch (err) {
        if (err.response.status === 401) {
            res.redirect('/login')
        } else {
            res.send('Error retrieving user info')
        }
    }
})

