import axios from 'axios'

const createInstance = (ctx) => axios.create({
  // baseURL: 'http://47.95.113.63/ssr'
  baseURL: 'localhost:3001',
  headers: {
    cookie: ctx.cookies
  }
})

export default createInstance
