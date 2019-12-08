import axios from 'axios'
import getBearer from './get-bearer'

export default async () => {
  const bearer = await getBearer()

  const { data } = await axios.get(
    'https://api.twitter.com/1.1/statuses/user_timeline.json',
    {
      params: {
        screen_name: 'samtgarson',
        count: 10,
        exclude_replies: true,
        tweet_mode: 'extended'
      },
      headers: {
        Authorization: `Bearer ${bearer}`
      }
    }
  )

  return data
}
