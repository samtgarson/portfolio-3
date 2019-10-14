/* eslint-disable promise/prefer-await-to-then */
const { resolve } = require('path')

if (process.env.NODE_ENV === 'development') {
  require('dotenv').config({
    path: resolve(process.cwd(), '.env.local')
  })
}

const cors = require('micro-cors')()
const fetchImages = require('./lib/fetch-images')
const extract = require('./lib/extract')
const { respondSuccess, respondError } = require('../utils/responders')

const handler = (req, res) => fetchImages()
  .then(extract)
  .then(respondSuccess(req, res))
  .catch(respondError(res))

module.exports = cors(handler)
