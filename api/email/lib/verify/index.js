const { post } = require('axios')

const VERIFY_URL = 'https://www.google.com/recaptcha/api/siteverify'

const allowedHost = host => {
  if (host === 'samgarson.com') return true
  return false
}

module.exports = async (response = '') => {
  if (process.env.NODE_ENV !== 'production') return true

  const secret = process.env.RECAPTCHA_SECRET_KEY
  const config = { params: { response, secret } }
  const {
    data: { success, score, hostname }
  } = await post(VERIFY_URL, null, config)

  if (allowedHost(hostname)) return false
  if (!success || score < 0.5) return false
  return true
}

module.exports.VERIFY_URL = VERIFY_URL
