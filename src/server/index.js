
import koa from 'koa'
import path from 'path'
import Router from 'koa-router'
import staticServe from 'koa-static'
import proxy from 'koa-proxy'
import { matchRoutes } from 'react-router-config'
import routes from '../Routes'
import { getStore } from '../store'
import { render } from './utils'

const app = new koa()
const router = new Router()

app.use(staticServe(path.join(__dirname, '../public')))
// app.use(staticServe(path.resolve(__dirname, 'public')))

app.use(proxy({
  host: 'localhost:3001',
  match: /^\/api\//
}))

router.get('*', (ctx) => {
  const store = getStore(ctx)
  const matchedRoutes = matchRoutes(routes, ctx.request.path)
  const promises = []
  matchedRoutes.forEach((item) => {
    if (item.route.loadData) {
      promises.push(item.route.loadData)
    }
  })
  Promise.all(promises).then(() => {
    ctx.body = render(store, routes, ctx)
  })
})

app.use(router.routes()).use(router.allowedMethods())

app.listen(3000, () => {
  console.log('running!')
})
