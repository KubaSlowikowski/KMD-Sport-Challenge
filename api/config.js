const CHALLENGE_START_TIMESTAMP = '17/08/2023'; // DD/MM/YYYY

function getChallengeStartTimestamp() {
    const [day, month, year] = CHALLENGE_START_TIMESTAMP.split('/');
    const date = new Date(+year, month - 1, +day);
    const timestamp = date.getTime();

    return Math.floor(timestamp / 1000);
}

module.exports = { getChallengeStartTimestamp };
