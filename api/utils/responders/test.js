const { respondError, respondSuccess } = require('./')

const _res = () => ({
  setHeader: jest.fn(),
  status: jest.fn(),
  json: jest.fn()
})
const body = [{ foo: 'bar' }, { baz: 'boop' }]
const status = 518 // I am a teapot

let res
describe('respondSuccess', () => {
  const allArgs = [{ body }, { body, status }]

  allArgs.forEach(args => {
    const description = Object.keys(args).join(', ') 
    describe(`when passed ${description}`, () => {
      beforeEach(() => {
        res = _res()
        const req = { method: 'GET' }
        respondSuccess(req, res)(args)
      })

      it('it sets the content type', () => {
        expect(res.setHeader).toHaveBeenCalledWith('Content-Type', 'application/json')
      })

      it('sets the cache control header', () => {
        expect(res.setHeader).toHaveBeenCalledWith('Cache-Control', 's-maxage=3600, maxage=3600')
      })

      it('sets the status', () => {
        expect(res.status).toHaveBeenCalledWith(args.status || 200)
      })

      it('ends the response', () => {
        expect(res.json).toHaveBeenCalledWith(body)
      })
    })
  })

  describe('when status is present', () => {

  })
})

const error = {
  message: 'I am a message',
  stack: 'I am a stack'
}

describe('respondError', () => {
  beforeEach(() => {
    res = _res()
    respondError(res)(error)
  })

  it('sets the cache control header', () => {
    expect(res.setHeader).not.toHaveBeenCalled()
  })

  it('sets the status', () => {
    expect(res.status).toHaveBeenCalledWith(500)
  })

  it('ends the response', () => {
    expect(res.json).toHaveBeenCalledWith({ error: error.message })
  })
})
