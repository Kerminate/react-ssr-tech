import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import routes from '../Routes'
import { getClientStore } from '../store'

const App = () => {
  const store = getClientStore()

  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          {routes.map(route => (
            <Route {...route} />
          ))}
        </div>
      </BrowserRouter>
    </Provider>
  )
}

if (typeof window !== 'undefined') {
  ReactDom.hydrate(<App />, document.getElementById('root'))
}