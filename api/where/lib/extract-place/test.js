const extractPlace = require('./')

const checkin = {
  createdAt: 100,
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

const emptyData = {
  response: {
    checkins: {
      items: []
    }
  }
}

describe('extract place', () => {
  it('extracts correctly', () => {
    const result = extractPlace(data)
    expect(result).toMatchObject({
      ...checkin,
      createdAt: 100000
    })
  })

  describe('when no checkins are returned', () => {
    it('throws the correct error', () => {
      expect(() => extractPlace(emptyData)).toThrowError('No checkins found')
    })
  })
})
