import React, { Fragment } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { Provider } from 'react-redux'
import { Helmet } from 'react-helmet'

export const render = (store, routes, ctx, context) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={ctx.request.path} context={context}>
        <Fragment>{renderRoutes(routes)}</Fragment>
      </StaticRouter>
    </Provider>
  )

  const helmet = Helmet.renderStatic()
  const cssStr = context.css.length ? context.css.join('\n') : ''

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      ${helmet.title.toString()}
      ${helmet.meta.toString()}
      <style>${cssStr}</style>
    </head>
    <body>
      <div id='root'>${content}</div>
      <script>window.context = {state: ${JSON.stringify(store.getState())}}</script>
      <script type="text/javascript" src="/index.js"></script>
    </body>
    </html>
  `
}