const fetch = require('node-fetch')

module.exports.CHECKIN_URL = `https://api.foursquare.com/v2/users/self/checkins?v=20181024&oauth_token=${process.env.FOURSQUARE_TOKEN}&limit=2`
module.exports.VENUE_URL = id => `https://api.foursquare.com/v2/venues/${id}?v=20181024&oauth_token=${process.env.FOURSQUARE_TOKEN}`

module.exports.getCheckin = () => fetch(exports.CHECKIN_URL)
module.exports.getVenue = id => fetch(exports.VENUE_URL(id))
