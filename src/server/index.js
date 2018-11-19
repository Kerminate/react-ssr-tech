
import koa from 'koa'
import path from 'path'
import Router from 'koa-router'
import staticServe from 'koa-static'
import { render } from './utils'

const app = new koa()
const router = new Router()

app.use(staticServe(path.join(__dirname, '../public')))

router.get('*', (ctx) => {
  ctx.body = render(ctx)
})

app.use(router.routes()).use(router.allowedMethods())

app.listen(3000, () => {
  console.log('running!')
})
