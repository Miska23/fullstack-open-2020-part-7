import loginService  from '../services/login'
import * as actionTypes from '../utils/actionTypes'
import storage from '../utils/storage'
import { setNotification } from './notificationReducer'

const reducer = (state = { user: null }, action) => {
  switch (action.type) {
  case actionTypes.LOGIN_SUCCESS:
    return { ...state, user: action.user }
  case actionTypes.LOGIN_FAIL:
    return { ...state, user: null }
  case actionTypes.SET_USER:
    return { ...state, user: action.user }
  case actionTypes.LOGOUT:
    return { ...state, user: action.user }
  default:
    return state
  }
}

export const logUserIn = (credentials) => {
  return async dispatch => {
    try {
      const user = await loginService.login(credentials)
      storage.saveUser(user)
      dispatch(setNotification(`${user.name} welcome back!`, 10, 'success'))
      dispatch({
        type: actionTypes.LOGIN_SUCCESS,
        user,
      })
    } catch (error) {
      dispatch(setNotification('wrong username/password', 10, 'error'))
      dispatch({
        type: actionTypes.LOGIN_FAIL,
      })
    }
  }
}

export const logUserOut = () => {
  storage.logoutUser()
  return {
    type: actionTypes.LOGOUT,
    user: null,
  }
}

export const setLoggedInUser = () => {
  const user = storage.loadUser()
  return {
    type: actionTypes.SET_USER,
    user,
  }
}

export default reducer
