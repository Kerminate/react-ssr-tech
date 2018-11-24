import * as types from '../constants'

const changeLogin = (value) => ({
  type: types.CHANGE_LOGIN,
  value
})

export const login = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get('/api/login')
      .then((res) => {
        dispatch(changeLogin(true))
      })
  }
}

export const logout = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get('/api/logout')
      .then((res) => {
        dispatch(changeLogin(false))
      })
  }
}

export const getHeaderInfo = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get('/api/islogin')
      .then((res) => {
        dispatch(changeLogin(res.data.login))
      })
  }
}