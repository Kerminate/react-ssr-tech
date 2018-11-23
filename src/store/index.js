import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import homeReducer from './reducers/home'
import headerReducer from './reducers/header'
import translationReducer from './reducers/translation'
import clientAxios from '../client/request'
import serverAxios from '../server/request'

const reducer = combineReducers({
  home: homeReducer,
  header: headerReducer,
  translation: translationReducer
})

export const getStore = (ctx) => {
  return createStore(reducer, applyMiddleware(thunk.withExtraArgument(serverAxios(ctx))))
}

export const getClientStore = () => {
  const defaultState = window.context.state;
  return createStore(reducer, defaultState, applyMiddleware(thunk.withExtraArgument(clientAxios)))
}