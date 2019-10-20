const mailgun = require("mailgun-js")

const { MAILGUN_API_KEY: apiKey, MAILGUN_DOMAIN: domain } = process.env
const mg = mailgun({ apiKey, domain })

const send = data => new Promise((resolve, reject) => { 
  mg.messages().send(data, (error, body) => {
    if (error) return reject(error)

    return resolve(body)
  })
})

module.exports = async ({ to, text, subject='New Portfolio Message' }) => {
  const data = { 
    from: 'Portfolio Postman <portfolio@mail.samgarson.com>', 
    to: 'sam@samgarson.com',
    subject,
    text,
    'h:Reply-To': to
  }

  const result = await send(data)
  return result
}
