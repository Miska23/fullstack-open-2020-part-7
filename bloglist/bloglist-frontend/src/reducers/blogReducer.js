import blogService  from '../services/blogs'
import * as actionTypes from '../utils/actionTypes'

const byLikes = (a1, a2) => a2.likes - a1.likes

const reducer = (state = [], action) => {
  switch (action.type) {
  case actionTypes.BLOGS_INIT:
    return action.data
  case actionTypes.BLOGS_CREATE:
    return [...state, action.data]
  case actionTypes.BLOGS_LIKE:
  {
    const likedBlog = action.data
    return state.map(blog => blog.id === likedBlog.id ? likedBlog : blog).sort(byLikes)
  }
  case actionTypes.BLOGS_REMOVE:
  {
    const removedBlogId = action.data
    const newState = state.filter(blog => blog.id !== removedBlogId).sort(byLikes)
    return newState
  }
  default:
    return state
  }
}

export const initializeBlogs = () => {
  return async dispatch => {
    const data = await blogService.getAll()
    dispatch({
      type: actionTypes.BLOGS_INIT,
      data
    })
  }
}

export const createBlog = (blog) => {
  return async dispatch => {
    const data = await blogService.create(blog)
    dispatch({
      type: actionTypes.BLOGS_CREATE,
      data
    })
  }
}

export const likeBlog = (blog) => {
  return async dispatch => {
    const blogToLike = { ...blog, likes: blog.likes + 1, user: blog.user.id }
    const data = await blogService.update(blogToLike)
    dispatch({
      type: actionTypes.BLOGS_LIKE,
      data,
    })
  }
}

export const removeBlog = (id) => {
  return async dispatch => {
    await blogService.remove(id)
    dispatch({
      type: actionTypes.BLOGS_REMOVE,
      data: id,
    })
  }
}

export default reducer
