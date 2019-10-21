const handler = require('@portfolio-3/utils/handler')
const fetchImages = require('./lib/fetch-images')
const extract = require('./lib/extract')

module.exports = handler(async () => {
  const html = await fetchImages()
  const body = await extract(html)
  return { body }
})
