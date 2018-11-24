import axios from 'axios'

const createInstance = (ctx) => {
  return axios.create({
    baseURL: 'http://localhost:3001',
    headers: {
      cookie: `uid=${ctx.cookies.get('uid')}`
    }
  })
}

export default createInstance
