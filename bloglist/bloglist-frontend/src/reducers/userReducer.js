import userService  from '../services/users'
import * as actionTypes from '../utils/actionTypes'


const reducer = (state = [], action) => {
  switch (action.type) {
  case actionTypes.USERS_INIT:
    return action.data
  default:
    return state
  }
}

export const initializeUsers= () => {
  return async dispatch => {
    const data = await userService.getAll()
    dispatch({
      type: actionTypes.USERS_INIT,
      data
    })
  }
}


export default reducer
