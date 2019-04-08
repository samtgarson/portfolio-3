const fetchVenue = require('./')
const checkStatus = require('../check-status')
const { getVenue } = require('../getters')

jest.mock('../check-status', () => jest.fn(data => Promise.resolve(data)))
jest.mock('../getters', () => ({ getVenue: jest.fn(() => Promise.resolve('I am a venue')) }))

const venue = { id: 'ID' }
const checkin = { foo: 'bar' }
const data = { venue, ...checkin }

let result
describe('fetch venue', () => {
  describe('when venue is fetched successfully', () => {
    beforeEach(() => {
      result = fetchVenue(data)
    })

    it('checks the status', () => {
      expect(checkStatus).toHaveBeenCalled()
    })

    it('contains the checkin and the venue', async () => {
      const expectedVenue = await getVenue()
      expect(result).resolves.toEqual([checkin, expectedVenue])
    })
  })

  describe('when venue call fails', () => {
    const error = new Error('Something went wrong')
    beforeEach(() => {
      getVenue.mockImplementationOnce(() => Promise.reject(error))
      result = fetchVenue(data)
    })

    it('bubbles the error', () => {
      expect(result).rejects.toEqual(error)
    })
  })
})
