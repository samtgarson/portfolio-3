module.exports.respondPlace = res => body => {
  res.setHeader('Cache-Control', 's-maxage=3600, maxage=3600')
  res.statusCode = 200
  res.end(JSON.stringify(body))
}

module.exports.respondError = res => ({ message = 'Something went wrong.' }) => {
  res.statusCode = 500
  const body = { error: message }
  res.end(JSON.stringify(body))
}
