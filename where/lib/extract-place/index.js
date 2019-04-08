module.exports = data => {
  const [checkin] = data.response.checkins.items
  const { createdAt, venue, isMayor } = checkin
  return {
    createdAt,
    venue,
    isMayor
  }
}
