const fetch = require('node-fetch')
const { getCheckin, getVenue, VENUE_URL, CHECKIN_URL } = require('./')

jest.mock('node-fetch', () => jest.fn(() => 'response'))

let result
describe('get checkin', () => {
  beforeEach(() => {
    result = getCheckin()
  })

  it('fetches the checkin', () => {
    expect(result).toEqual('response')
  })

  it('uses the right URL', () => {
    expect(fetch).toHaveBeenCalledWith(CHECKIN_URL)
  })
})

const id = 'ID'
describe('get venue', () => {
  beforeEach(() => {
    result = getVenue(id)
  })

  it('fetches the checkin', () => {
    expect(result).toEqual('response')
  })

  it('uses the right URL', () => {
    expect(fetch).toHaveBeenCalledWith(VENUE_URL(id))
  })
})
