import React from 'react'

import { Link } from 'react-router-dom'

import Togglable from './Togglable'

import NewBlog from './NewBlog'


const Blogs = ({ blogs }) => {

  return (
    <div>
      <Togglable buttonLabel='create new blog'>
        <NewBlog />
      </Togglable>

      <ul style={{ listStyle: 'none' }}>
        {blogs.map(blog =>
          <li key={blog.id}>
            <Link to={`/blogs/${blog.id}`}>{blog.title} {blog.author}</Link>
          </li>
        )}
      </ul>
    </div>

  )
}


export default Blogs