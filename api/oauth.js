const axios = require("axios");
const { connectToDatabase } = require("./db/database");
const { ENDPOINTS, GRANT_TYPES } = require("./utils/utils");

async function refreshToken(existing_refresh_token, athlete_id) {
    const tokenEndpoint = ENDPOINTS.STRAVA_TOKEN;
    const requestBody = {
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
        grant_type: GRANT_TYPES.REFRESH_TOKEN,
        refresh_token: existing_refresh_token
    }

    const response = await axios.post(tokenEndpoint, requestBody);
    const { token_type, access_token, refresh_token, expires_at, expires_in } = response.data;

    const database = await connectToDatabase();
    const athletesCollection = database.collection("athletes");

    const data = {
        token_type: token_type,
        access_token: access_token,
        refresh_token: refresh_token,
        expires_at: expires_at,
        expires_in: expires_in,
    };
    await athletesCollection.updateOne({ athleteId: athlete_id }, { $set: data }, { upsert: true });
    return access_token;
}

function isTokenExpired(expires_at) {
    const currentTimestampInSeconds = Math.floor(new Date().getTime() / 1000);
    return expires_at < currentTimestampInSeconds;
}

module.exports = { refreshToken, isTokenExpired };
