import apiKey from './.key'
import { ChatGPT } from '../src'

const api = new ChatGPT({
  apiKey: apiKey, // get api key
  debug: true,
  requestConfig: {
    proxy: {
      protocol: 'http',
      host: '127.0.0.1',
      port: 7890,
    },
  },
})

async function run() {
  try {
    const res = await api.sendMessage({
      text: '不吃早饭对身体有没有坏处',
      onProgress(t) {
        console.log('[onProgress]', t)
      },
    })
    console.log(res)
  } catch (e) {
    console.log('err', JSON.stringify(e))    
  }
}

run()
