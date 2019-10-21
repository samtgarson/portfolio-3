const handler = require('@portfolio-3/utils/handler')
const send = require('./lib/send')
const verify = require('./lib/verify')

const createError = (message, status = 500) => {
  const e = new Error(message)
  e.statusCode = status
  return e
}

module.exports = handler(async req => {
  const { email, name, text, token } = req.body

  if (!email) throw createError('Missing email', 400)
  if (!text) throw createError('Missing text', 400)
  if (!token) throw createError('Missing token', 400)

  const verified = await verify(token)
  if (!verified) throw createError('Could not verify request', 401)

  await send({ email, name, text })

  return { status: 201 }
})
