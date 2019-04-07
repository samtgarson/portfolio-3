module.exports = data => {
  const [checkin] = data.response.checkins.items
  const { createdAt, venue, isMayor } = checkin
  return {
    createdAt,
    place: venue.name,
    url: `https://foursquare.com/v/${venue.id}`,
    isMayor
  }
}
