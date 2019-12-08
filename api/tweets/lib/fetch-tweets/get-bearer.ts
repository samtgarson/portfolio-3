import axios from 'axios'

interface TwitterAuthResponse {
  access_token: string;
  token_type: string;
}

const { TWITTER_API_KEY, TWITTER_API_SECRET } = process.env
if (!TWITTER_API_KEY || !TWITTER_API_SECRET) throw new Error('Missing Twitter Env')

export default async () => {
  const res = await axios.post<TwitterAuthResponse>(
    'https://api.twitter.com/oauth2/token',
    'grant_type=client_credentials',
    {
      auth: {
        username: TWITTER_API_KEY,
        password: TWITTER_API_SECRET
      }
    }
  )

  return res.data.access_token
}

