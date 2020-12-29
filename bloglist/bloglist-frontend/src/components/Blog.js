import React, { useState } from 'react'

const Blog = ({ blog, handleLike, handleRemove, loginState }) => {
  const [visible, setVisible] = useState(false)

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }

  const label = visible ? 'hide' : 'view'

  return (
    (blog && loginState.user) ?
      <div style={blogStyle} className='blog'>
        <div>
          <i>{blog.title}</i> by {blog.author} <button onClick={() => setVisible(!visible)}>{label}</button>
        </div>
        {visible&&(
          <div>
            <div>{blog.url}</div>
            <div>likes {blog.likes}
              <button onClick={() => handleLike(blog.id)}>like</button>
            </div>
            <div>{blog.user.name}</div>
            {blog.user.username === loginState.user.username  &&<button onClick={() => handleRemove(blog.id)}>remove</button>}
            <ul>
              {blog.comments.map((comment) => <li key={comment._id}>{comment.content}</li>)}
            </ul>
          </div>
        )}
      </div>
      :
      <div>Fetching data... </div>
  )
}

export default Blog