const send = require('./')

const mockSend = jest.fn((data, cb) => cb(null, 'sent'))
jest.mock('mailgun-js', () => {
  return jest.fn(({ apiKey, domain }) => ({
    messages: jest.fn(() => ({
      send: mockSend
    }))
  }))
})

describe('send', () => {
  let result
  let error
  const body = {
    to: 'to',
    subject: 'subject',
    text: 'text'
  }

  beforeEach(async () => {
    try {
      result = await send(body)
    } catch (e) {
      error = e
    }
  })

  it('sends the email', () => {
    expect(mockSend).toHaveBeenCalledWith(
      {
        from: 'portfolio@samgarson.com',
        to: 'sam@samgarson.com',
        subject: body.subject,
        text: body.text,
        'h:Reply-To': body.to
      },
      expect.any(Function)
    )
  })

  describe('when the email is successful', () => {
    it('returns the response from mailgun', () => {
      expect(result).toEqual('sent')     
    })

    it('does not throw an error', () => {
      expect(error).toBeUndefined()
    })
  })

  describe('when the email goes wrong', () => {
    const mgError = new Error()

    beforeAll(() => {
      mockSend.mockImplementation((d, cb) => cb(mgError)) 
    })

    it('throws an error', () => {
      expect(error).toEqual(mgError)
    })
  })
})
