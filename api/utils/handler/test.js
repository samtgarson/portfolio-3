const cors = require('micro-cors')()
const handler = require('./')
const { respondError, respondSuccess } = require('../responders')

jest.mock('../responders', () => {
  const successSpy = jest.fn(data => data)
  const errorSpy = jest.fn(data => data)

  return {
    respondError: jest.fn(() => errorSpy),
    respondSuccess: jest.fn(() => successSpy)
  }
})


describe('handler', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  const data = 'i am data'
  const req = {}
  const res = { setHeader: jest.fn() }
  let result

  it('exports a function', () => {
    expect(handler).toBeInstanceOf(Function)
  })

  describe('when successful', () => {
    const service = async () => data

    beforeEach(async () => {
      micro = handler(service)
      result = await micro(req, res)
    })

    it('responds with the data', () => {
      expect(respondSuccess).toHaveBeenCalledWith(req, res)
      expect(respondError).toHaveBeenCalledWith(res)

      expect(respondSuccess()).toHaveBeenCalledWith(data)
      expect(respondError()).not.toHaveBeenCalled()
    })
  })

  describe('when failed', () => {
    const err = new Error('oh no')
    const service = async () => { throw err }

    beforeEach(async () => {
      micro = handler(service)
      result = await micro(req, res)
    })

    it('responds with the data', () => {
      expect(respondSuccess).toHaveBeenCalledWith(req, res)
      expect(respondError).toHaveBeenCalledWith(res)

      expect(respondSuccess()).not.toHaveBeenCalled()
      expect(respondError()).toHaveBeenCalledWith(err)
    })
  })
})
