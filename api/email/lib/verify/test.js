const { post } = require('axios')
const verify = require('./')

jest.mock('axios', () => ({
  post: jest.fn(() => ({ data: {} }))
}))

const response = 'response'

const runTest = (score, success, expected) => {
  it(`returns ${expected}`, async () => {
    post.mockImplementation(async () => ({ data: { score, success } }))
    const result = await verify(response)

    expect(result).toEqual(expected)
  })
}

describe('verify', () => {

  it('makes the correct request', async () => {
    const secretKey = 'secretKey'
    process.env.RECAPTCHA_SECRET_KEY = secretKey
    await verify(response)

    expect(post).toHaveBeenCalledWith(
      verify.VERIFY_URL,
      null,
      { params: { response, secret: secretKey } }
    )
  })

  describe('when verify is successful', () => {
    const success = true

    describe('when score is >= 0.5', () => {
      const score = 0.7
      
      runTest(score, success, true)
    })

    describe('when score is < 0.5', () => {
      const score = 0.3

      runTest(score, success, false)
    })
  })

  describe('when verify is not successful', () => {
    const score = null
    const success = false

    runTest(score, success, false)
  })
})
