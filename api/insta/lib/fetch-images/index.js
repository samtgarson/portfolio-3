const { get } = require('axios')

const INSTA_URL = 'https://instagram.com/samtgarson'
  
module.exports = async () => (await get(INSTA_URL)).data
module.exports.INSTA_URL = INSTA_URL 
