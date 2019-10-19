/* eslint-disable promise/prefer-await-to-then */
const { resolve } = require('path')
const createLogMiddleware = require('micro-morgan')
const createCorsMiddleware = require('micro-cors')
const { respondSuccess, respondError } = require('../responders')

const origin = process.env.NODE_ENV === 'production'
  ? 'https://samgarson.com'
  : '*'

const logger = createLogMiddleware('tiny')
const cors = createCorsMiddleware({ origin })

module.exports = service => 
  logger(cors((req, res) => service()
    .then(respondSuccess(req, res))
    .catch(respondError(res))))

