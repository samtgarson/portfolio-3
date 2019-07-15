/* eslint-disable promise/prefer-await-to-then */
const { getVenue } = require('../getters')
const checkStatus = require('../check-status')

const createVenue = id => new Promise((resolve, reject) => getVenue(id)
  .then(checkStatus)
  .then(resolve)
  .catch(reject))

module.exports = ({ venue, ...checkin }) => Promise.all([
  checkin,
  createVenue(venue.id)
])
