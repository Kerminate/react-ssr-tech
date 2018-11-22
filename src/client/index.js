import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { Provider } from 'react-redux'
import routes from '../Routes'
import { getClientStore } from '../store'

const App = () => {
  const store = getClientStore()

  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          {/* renderRoutes 用来渲染多级路由 */}
          { renderRoutes(routes) }
        </div>
      </BrowserRouter>
    </Provider>
  )
}

if (typeof window !== 'undefined') {
  ReactDom.hydrate(<App />, document.getElementById('root'))
}