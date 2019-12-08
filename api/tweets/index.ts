import handler from '@portfolio-3/utils/handler'
import fetchTweets from './lib/fetch-tweets'


export default handler(async () => {
  return { body: await fetchTweets() }
})
