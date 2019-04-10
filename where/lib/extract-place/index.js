module.exports = data => {
  if (data.response.checkins.items.length === 0) {
    throw new Error('No checkins found.')
  }

  const [checkin] = data.response.checkins.items
  const { createdAt, venue, isMayor } = checkin
  return {
    createdAt: createdAt * 1000,
    venue,
    isMayor
  }
}
