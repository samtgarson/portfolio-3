/* eslint-disable promise/prefer-await-to-then */
const { resolve } = require('path')

if (process.env.NODE_ENV === 'development') {
  require('dotenv').config({
    path: resolve(process.cwd(), '.env.local')
  })
}

const cors = require('micro-cors')
const checkStatus = require('./lib/check-status')
const extractPlace = require('./lib/extract-place')
const { respondPlace, respondError } = require('./lib/responders')
const { getCheckin } = require('./lib/getters')
const fetchVenue = require('./lib/fetch-venue')
const constructCheckin = require('./lib/construct-checkin')

const handler = (req, res) => getCheckin()
  .then(checkStatus)
  .then(extractPlace)
  .then(fetchVenue)
  .then(constructCheckin)
  .then(respondPlace(res))
  .catch(respondError(res))

module.exports = cors()(handler)
