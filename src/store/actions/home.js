import axios from 'axios'
import * as types from '../constants'

const changeList = (list) => ({
  type: types.CHANGE_HOME_LIST,
  list
})

export const getHomeList = () => {
  return () => {
    axios.get('http://47.95.113.63/ssr/api/news.json?secret=abcd')
      .then((res) => {
        const list = res.data.data
        dispatch(changeList(list))
      })
  }
}