import React from 'react'
import NewComment from './NewComment'

const Blog = ({ blog, handleLike, handleRemove, loginState }) => {

  return (
    (blog && loginState.user)
      ?
      <div>
        <div>
          <h4>
            {blog.title} by {blog.author}
          </h4>
        </div>
        <div>
          <div>{blog.url}</div>
          <div>likes {blog.likes}
            <button onClick={() => handleLike(blog.id)}>like</button>
          </div>
          <div>Added by {blog.user.name}</div>
          {blog.user.username === loginState.user.username  &&<button onClick={() => handleRemove(blog.id)}>remove</button>}
          <h4>Comments</h4>
          <NewComment blogId={blog.id}/>
          <ul style={{ listStyle: 'none' }}>
            {blog.comments.sort(({ timestamp: stampA }, { timestamp: stampB }) => stampB - stampA).map((comment) => <li key={comment._id}>{comment.content}</li>)}
          </ul>
        </div>
      </div>
      :
      <div>Fetching data... </div>
  )
}

export default Blog