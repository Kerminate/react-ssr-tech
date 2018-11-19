import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const reducer = (state = { name: 'kpl' }, action) => {
  return state
}

const getStore = () => {
  return createStore(reducer, applyMiddleware(thunk))
}

export default getStore