const checkStatus = require('./')

const json = 'i am json'
const okResponse = {
  ok: true,
  json: jest.fn(() => json)
}

const statusText = 'I am a status text'
const failedResponse = {
  ok: false,
  statusText
}

let result
describe('check status', () => {
  describe('for a response that is OK', () => {
    it('returns the result of json body', () => {
      result = checkStatus(okResponse)

      expect(okResponse.json).toHaveBeenCalled()
      expect(result).toEqual(json)
    })
  })

  describe('for a response that is has failed', () => {
    beforeEach(() => {
      result = checkStatus(failedResponse)
    })

    it('rejects with an Error', () => {
      expect(result).rejects.toBeInstanceOf(Error)
    })

    it('contains the status text and original response', () => {
      expect(result).rejects.toMatchObject({
        response: failedResponse,
        message: statusText
      })
    })
  })
})
