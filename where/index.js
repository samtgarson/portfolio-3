/* eslint-disable promise/prefer-await-to-then */
const fetch = require('node-fetch')
const checkStatus = require('./lib/check-status')
const extractPlace = require('./lib/extract-place')
const { respondPlace, respondError } = require('./lib/responds')

const URL = `https://api.foursquare.com/v2/users/self/checkins?v=20181024&oauth_token=${process.env.FOURSQUARE_TOKEN}&limit=1`

module.exports = (req, res) => fetch(URL)
  .then(checkStatus)
  .then(data => data.json())
  .then(extractPlace)
  .then(respondPlace(res))
  .catch(respondError(res))
