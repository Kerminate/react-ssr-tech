import * as types from '../constants'

const defaultState = {
  login: false
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.CHANGE_LOGIN:
      return { ...state, login: action.value }
    default:
      return state
  }
}