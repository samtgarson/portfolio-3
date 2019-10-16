const handler = require('@portfolio-3/utils/handler')
const checkStatus = require('./lib/check-status')
const extractPlace = require('./lib/extract-place')
const { getCheckin } = require('./lib/getters')
const fetchVenue = require('./lib/fetch-venue')
const constructCheckin = require('./lib/construct-checkin')

module.exports = handler(() => getCheckin()
  .then(checkStatus)
  .then(extractPlace)
  .then(fetchVenue)
  .then(constructCheckin)
)

