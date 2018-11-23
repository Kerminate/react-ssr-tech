import React from 'react'
import { renderRoutes } from 'react-router-config'
import Header from './components/Header'
import {getHeaderInfo  } from './store/actions/header'

const App = (props) => {
  return (
    <div>
      <Header />
      { renderRoutes(props.route.routes) }
    </div>
  )
}

App.loadData = (store) => {
  return store.dispatch(getHeaderInfo())
}

export default App