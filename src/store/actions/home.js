import * as types from '../constants'

const changeList = (list) => ({
  type: types.CHANGE_HOME_LIST,
  list
})

export const getHomeList = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get('/api/news.json?secret=abcd')
      .then((res) => {
        const list = res.data.data
        dispatch(changeList(list))
      })
  }
}