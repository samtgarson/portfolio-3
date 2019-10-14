const extract = require('./')
const { readFileSync } = require('fs')
const { resolve } = require('path')

const html = readFileSync(resolve(__dirname, './fixture.html')).toString()

describe('extract', () => {
  let result

  describe('when html is valid', () => {
    beforeEach(async () => {
      result = await extract(html)
    })

    it('returns an array', () => {
      expect(result).toBeInstanceOf(Array)
    })

    it('has the correct attributes', () => {
      result.forEach(a => {
        expect(a).toEqual(
          expect.objectContaining({
            src: expect.any(String),
            url: expect.any(String)
          })
        )
      })
    })

    it('has the correct values', () => {
      expect(result[0]).toEqual({
        location: "The White Cube Gallery",
        src: "https://scontent-lht6-1.cdninstagram.com/vp/f9e3797259496cd9cc78206a8514418b/5E65095E/t51.2885-15/e35/p1080x1080/70716291_746472139129972_7212340262669819570_n.jpg?_nc_ht=scontent-lht6-1.cdninstagram.com&_nc_cat=104",
        url: "https://instagram.com/samtgarson/p/B3R5bBKhuwO/"
      })
    })
  })

  describe('no html is passed', () => {
    beforeEach(async () => {
      result = await extract()
    })

    it('returns an empty array', () => {
      expect(result).toEqual([])
    })
  })

  describe('when html is not valid', () => {
    beforeEach(async () => {
      const invalidHtml = `
<html>
<body>
<img src="nope.jpg" />
</body>
</html>
      `
      result = await extract(invalidHtml)
    })

    it('returns an empty array', () => {
      expect(result).toEqual([])
    })
  })
})

