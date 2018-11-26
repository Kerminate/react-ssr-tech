import React, { Fragment } from 'react'
import { renderRoutes } from 'react-router-config'
import Header from './components/Header'
import {getHeaderInfo  } from './store/actions/header'

const App = (props) => {
  return (
    <Fragment>
      <Header staticContext={props.staticContext} />
      { renderRoutes(props.route.routes) }
    </Fragment>
  )
}

App.loadData = (store) => {
  return store.dispatch(getHeaderInfo())
}

export default App