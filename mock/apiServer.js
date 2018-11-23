const koa = require('koa')
const Router = require('koa-router')
const { posts, comments } = require('./data')

const app = new koa()
const router = new Router()

router.get('/api/posts', (ctx) => {
  ctx.body = posts
})

app.use(router.routes()).use(router.allowedMethods())

app.listen(3001, () => {
  console.log('api server is running at localhost:30001!')
})
