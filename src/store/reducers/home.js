import * as types from '../constants'

const defaultState = {
  newsList: []
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.CHANGE_HOME_LIST:
      return { ...state, newsList: action.list }
    default:
      return state
  }
}