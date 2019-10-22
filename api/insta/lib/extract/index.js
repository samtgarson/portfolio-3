const { INSTA_URL } = require('../fetch-images')

module.exports = async html => {
  if (!html) return []

  const regex = /script type="text\/javascript">window._sharedData = ({.+});/
  const match = html.match(regex)

  if (!match || !match[1]) return []

  const data = JSON.parse(match[1])

  if (!data.entry_data.ProfilePage) throw new Error('Could not extract images')
  const elements = data.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges

  const images = elements.map(({ node }) => ({
    src: node.display_url,
    location: node.location && node.location.name,
    url: `${INSTA_URL}/p/${node.shortcode}/`
  }))

  return images
}
