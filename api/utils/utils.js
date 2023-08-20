const ENDPOINTS = {
    STRAVA_TOKEN: 'https://www.strava.com/oauth/token',
    STRAVA_AUTHORIZE: 'https://www.strava.com/oauth/authorize',
    STRAVA_ATHLETE_ACTIVITIES: 'https://www.strava.com/api/v3/athlete/activities',
}

const GRANT_TYPES = {
    REFRESH_TOKEN: 'refresh_token',
    AUTHORIZATION_CODE: 'authorization_code',
}

// Scopes for requesting Strava access
const SCOPES = {
    READ: 'read', // read public segments, public routes, public profile data, public posts, public events, club feeds, and leaderboards
    ACTIVITY_READ: 'activity:read' // read the user's activity data for activities that are visible to Everyone and Followers, excluding privacy zone data
}

module.exports = {ENDPOINTS, GRANT_TYPES, SCOPES};
