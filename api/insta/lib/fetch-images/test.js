const fetch = require('node-fetch')
const fetchImages = require('./')

const { INSTA_URL } = fetchImages
jest.mock('node-fetch', () => jest.fn(async () => ({ 
  text: jest.fn(async () => 'response') 
})))

let result
describe('get images', () => {
  beforeEach(async () => {
    result = await fetchImages()
  })

  it('fetches the checkin', () => {
    expect(result).toEqual('response')
  })

  it('uses the right URL', () => {
    expect(fetch).toHaveBeenCalledWith(INSTA_URL)
  })
})

