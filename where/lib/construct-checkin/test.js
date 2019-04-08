const constructCheckin = require('./')

const checkin = {
  foo: 'bar'
}

const url = 'I am a URL'
const canonicalUrl = 'I am a canonical URL'

const venueWithURL = {
  response: {
    venue: {
      url,
      canonicalUrl
    }
  }
}

const venueWithoutURL = {
  response: {
    venue: {
      canonicalUrl
    }
  }
}

let result
describe('construct checkin', () => {
  describe('when URL is present', () => {
    beforeEach(() => {
      result = constructCheckin([checkin, venueWithURL])
    })

    it('construcs the checkin', () => {
      expect(result).toMatchObject(checkin)
    })

    it('has the URL', () => {
      expect(result).toHaveProperty('url', url)
    })
  })

  describe('when URL is not present', () => {
    beforeEach(() => {
      result = constructCheckin([checkin, venueWithoutURL])
    })

    it('construcs the checkin', () => {
      expect(result).toMatchObject(checkin)
    })

    it('has the URL', () => {
      expect(result).toHaveProperty('url', canonicalUrl)
    })
  })
})
