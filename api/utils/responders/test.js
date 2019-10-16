const { respondError, respondSuccess } = require('./')

const _res = () => ({
  setHeader: jest.fn(),
  end: jest.fn()
})
const body = [{ foo: 'bar' }, { baz: 'boop' }]

let res
describe('respondSuccess', () => {
  beforeEach(() => {
    res = _res()
    req = {}
    respondSuccess(req, res)(body)
  })

  it('sets the cache control header', () => {
    expect(res.setHeader).toHaveBeenCalledWith('Cache-Control', 's-maxage=3600, maxage=3600')
  })

  it('sets the status', () => {
    expect(res.statusCode).toEqual(200)
  })

  it('ends the response', () => {
    expect(res.end).toHaveBeenCalledWith(JSON.stringify(body))
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
    expect(res.statusCode).toEqual(500)
  })

  it('ends the response', () => {
    expect(res.end).toHaveBeenCalledWith(JSON.stringify({ error: error.message }))
  })
})
