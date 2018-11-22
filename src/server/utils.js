import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { Provider } from 'react-redux'

export const render = (store, routes, ctx) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={ctx.request.path} context={{}}>
        <div>
          {/* renderRoutes 用来渲染多级路由 */}
          { renderRoutes(routes) }
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
    <script>
      window.context = {
        state: ${JSON.stringify(store.getState())}
      }
    </script>
    <script type="text/javascript" src="/index.js"></script>
    </body>
    </html>
  `
}