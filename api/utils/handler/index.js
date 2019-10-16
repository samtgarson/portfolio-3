/* eslint-disable promise/prefer-await-to-then */
const { resolve } = require('path')

const cors = require('micro-cors')()
const { respondSuccess, respondError } = require('../responders')

module.exports = service => 
  cors((req, res) => service()
    .then(respondSuccess(req, res))
    .catch(respondError(res)))

