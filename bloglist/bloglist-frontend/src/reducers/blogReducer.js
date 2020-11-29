import blogService  from '../services/blogs'

const reducer = (state = [], action) => {
  switch (action.type) {
  case 'INIT':
    return action.data
  case 'CREATE':
    return [...state, action.data]
  default:
    return state
  }
}

export const initializeBlogs = () => {
  return async dispatch => {
    const data = await blogService.getAll()
    dispatch({
      type: 'INIT',
      data
    })
  }
}

export const createBlog = (blog) => {
  return async dispatch => {
    const data = await blogService.create(blog)
    dispatch({
      type: 'CREATE',
      data
    })
  }
}

export default reducer
