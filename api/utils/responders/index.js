module.exports.respondSuccess = (req, res) => ({ body = '', status = 200 } = {}) => {
  if (req.method === 'GET') res.setHeader('Cache-Control', 's-maxage=3600, maxage=3600')
  res.setHeader('Content-Type', 'application/json')
  res.status(status)
  res.json(body)
}

module.exports.respondError = res => ({ statusCode = 500, stack, message = 'Something went wrong.' }) => {
  res.status(statusCode)
  const body = { error: message }
  if (process.env.NODE_ENV === 'development') body.stack = stack
  res.json(body)
}
