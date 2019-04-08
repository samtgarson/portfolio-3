const extractPlace = require('./')

const checkin = {
  createdAt: 'I am created at',
  venue: 'I am venue',
  isMayor: 'I am mayor'
}

const data = {
  response: {
    checkins: {
      items: [checkin]
    }
  }
}

describe('extract place', () => {
  it('extracts correctly', () => {
    const result = extractPlace(data)
    expect(result).toMatchObject(checkin)
  })
})
