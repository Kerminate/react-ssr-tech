import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Routes from '../Routes'
import getStore from '../store'

export const render = (ctx) => {
  const content = renderToString(
    <Provider store={getStore()}>
      <StaticRouter location={ctx.request.path} context={{}}>
        {Routes}
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