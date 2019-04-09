module.exports = data => {
  const checkin = data.response.checkins.items[1]
  const { createdAt, venue, isMayor } = checkin
  return {
    createdAt: createdAt * 1000,
    venue,
    isMayor
  }
}
