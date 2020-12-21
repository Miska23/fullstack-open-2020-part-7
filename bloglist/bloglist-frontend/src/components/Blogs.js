import React from 'react'
import Blog from './Blog'

import Togglable from './Togglable'

import NewBlog from './NewBlog'


const Blogs = ({ blogs, handleLike, handleRemove, loginState }) => {

  return (
    <div>
      <Togglable buttonLabel='create new blog'>
        <NewBlog />
      </Togglable>

      {blogs.map(blog =>
        <Blog
          key={blog.id}
          blog={blog}
          handleLike={handleLike}
          handleRemove={handleRemove}
          own={loginState.user.username===blog.user.username}
        />
      )}
    </div>

  )
}


export default Blogs