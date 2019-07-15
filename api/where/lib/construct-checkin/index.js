module.exports = ([checkin, { response: { venue } }]) => ({
  ...checkin,
  place: venue.name,
  url: venue.url || venue.canonicalUrl
})
