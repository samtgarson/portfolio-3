const fetch = require('node-fetch')

const INSTA_URL = 'https://instagram.com/samtgarson'
  
module.exports = async () => (await fetch(INSTA_URL)).text()
module.exports.INSTA_URL = INSTA_URL 
