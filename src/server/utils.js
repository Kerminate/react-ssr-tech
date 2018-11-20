import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter, Route } from 'react-router-dom'
import { matchRoutes } from 'react-router-config'
import { Provider } from 'react-redux'
import routes from '../Routes'
import getStore from '../store'

export const render = (ctx) => {
  const store = getStore()
  const matchedRoutes = matchRoutes(routes, ctx.request.path)

  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={ctx.request.path} context={{}}>
        <div>
          {routes.map(route => (
            <Route {...route} />
          ))}
        </div>
      </StaticRouter>
    </Provider>
  )
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <title>react ssr</title>
      </head>
      <body>
        <div id='root'>${content}</div>
        <script type="text/javascript" src="/public/index.js"></script>
      </body>
    </html>
  `
}