const handler = require('@portfolio-3/utils/handler')
const send = require('./lib/send')

const createError = (message, status = 500) => {
  const e = new Error(message)
  e.statusCode = status
  return e
}

module.exports = handler(async req => {
  const { to, subject, text } = req.body

  if (!to || !text) throw createError('Missing to or text', 400)

  return await send({ to, subject, text })
})
