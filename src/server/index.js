
import koa from 'koa'
import path from 'path'
import Router from 'koa-router'
import staticServe from 'koa-static'
import proxy from 'koa-proxy'
import { matchRoutes } from 'react-router-config'
import routes from '../Routes'
import { getStore } from '../store'
import { render } from './utils'
import { resolve, reject } from 'any-promise';

const app = new koa()
const router = new Router()

app.use(staticServe(path.join(__dirname, '../public')))

app.use(proxy({
  host: 'http://localhost:3001',
  match: /^\/api\//
}))

router.get('*', async (ctx) => {
  const context = { css: [] }
  const store = getStore(ctx)
  const matchedRoutes = matchRoutes(routes, ctx.request.path)
  const promises = []
  matchedRoutes.forEach((item) => {
    if (item.route.loadData) {
      // 使组件里每一个 Promise 都被 resolve，正常的数据组件会显示，不正常的而不显示，避免只要有一个 Promise 被 reject 就整个页面不显示
      const promise = new Promise((resolve) => {
        item.route.loadData(store).then(resolve).catch(resolve)
      })
      promises.push(promise)
    }
  })

  await Promise.all(promises)
  const html = render(store, routes, ctx, context)

  if (context.action === 'REPLACE') {
    ctx.status = 301
    ctx.redirect(context.url)
  } else if (context.NOT_FOUND) {
    ctx.status = 404
    ctx.body = html
  } else {
    ctx.body = html
  }
})

app.use(router.routes()).use(router.allowedMethods())

app.listen(3000, () => {
  console.log('server is running at localhost:3000!')
})
