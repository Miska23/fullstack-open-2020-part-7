import * as actionTypes from '../utils/actionTypes'

const reducer = (state = null, action) => {
  switch (action.type) {
  case actionTypes.SET_NOTIFICATION:
    return action
  case actionTypes.CLEAR_NOTIFICATION:
    return null
  default:
    return state
  }
}

let timeoutId

export const setNotification = (content, time, messageType) => {
  return async dispatch => {
    dispatch({
      type: actionTypes.SET_NOTIFICATION,
      content,
      messageType
    })

    if (timeoutId) {
      clearTimeout(timeoutId)
    }

    timeoutId = setTimeout(() => {
      dispatch({
        type: actionTypes.CLEAR_NOTIFICATION
      })
    }, time * 1000)
  }
}

export const clearNotification = () => (
  { type: actionTypes.CLEAR_NOTIFICATION }
)

export default reducer