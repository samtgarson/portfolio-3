const fetch = require('node-fetch')

const sixHours = 6 * 60 * 60 * 1000
const before = Math.floor((Date.now() - sixHours) / 1000)

module.exports.CHECKIN_URL = `https://api.foursquare.com/v2/users/self/checkins?v=20181024&oauth_token=${process.env.FOURSQUARE_TOKEN}&limit=1&beforeTimestamp=${before}`
module.exports.VENUE_URL = id => `https://api.foursquare.com/v2/venues/${id}?v=20181024&oauth_token=${process.env.FOURSQUARE_TOKEN}`

module.exports.getCheckin = () => fetch(exports.CHECKIN_URL)
module.exports.getVenue = id => fetch(exports.VENUE_URL(id))
