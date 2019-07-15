/* eslint-disable promise/prefer-await-to-then */
module.exports = response => {
  if (response.ok) {
    return response.json()
  }

  return new Promise(
    (resolve, reject) => response.json().then(body => {
      const error = new Error(`Foursquare error: ${body.meta.errorDetail}`)
      error.response = response
      return reject(error)
    })
  )
}
