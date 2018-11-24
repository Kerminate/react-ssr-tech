const koa = require('koa')
const Router = require('koa-router')
const session = require('koa-session')
const { posts, comments } = require('./data')

const app = new koa()
const router = new Router()

app.keys = ['serect key']

app.use(session({
  key: 'uid',
  maxAge: 7 * 24 * 60 * 60 * 60 * 1000,
  httpOnly: true,
  signed: true
}, app))

router.get('/api/posts', (ctx) => {
  ctx.body = {
    data: posts
  }
})

router.get('/api/translations', (ctx) => {
  ctx.body = {
    success: true,
    data: ctx.session.authorized ? comments : []
  }
})

router.get('/api/login', (ctx) => {
  ctx.session.authorized = true
  ctx.body = {
    login: ctx.session.authorized
  }
})

router.get('/api/islogin', (ctx) => {
  ctx.body = {
    login: ctx.session.authorized || false
  }
})

router.get('/api/logout', (ctx) => {
  ctx.body = {
    login: false
  }
})

app.use(router.routes()).use(router.allowedMethods())

app.listen(3001, () => {
  console.log('api server is running at localhost:3001!')
})
