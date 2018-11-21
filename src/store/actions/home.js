import axios from 'axios'
import * as types from '../constants'

const changeList = (list) => ({
  type: types.CHANGE_HOME_LIST,
  list
})

export const getHomeList = (server) => {
  let url = ''
  if (server) {
    url = 'http://47.95.113.63/ssr/api/news.json?secret=abcd'
  } else {
    url = '/api/news.json?secret=abcd'
  }
  return (dispatch) => {
    return axios.get(url)
      .then((res) => {
        const list = res.data.data
        dispatch(changeList(list))
      })
  }
}