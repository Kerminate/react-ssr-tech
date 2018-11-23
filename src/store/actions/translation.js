import * as types from '../constants'

const changeList = (list) => ({
  type: types.CHANGE_TRANSLATION_LIST,
  list
})

export const getTranslationList = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get('/api/translations')
      .then((res) => {
        if (res.data.success) {
          const list = res.data.data
          dispatch(changeList(list))
        } else {
          const list = []
          dispatch(changeList(list))
        }
      })
  }
}