import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { addComment } from '../reducers/blogReducer'

const NewComment = ({ blogId }) => {

  const [content, setContent] = useState('')
  const dispatch = useDispatch()

  const handleNewComment = (event) => {
    event.preventDefault()

    const newComment = {
      content,
      timestamp: Date.now()
    }

    dispatch(addComment(newComment, blogId))

    setContent('')
  }

  return (
    <form onSubmit={handleNewComment}>
      <div>
        Comment
        <input
          id='comment'
          value={content}
          onChange={({ target }) => setContent(target.value)}
        />
        <button id="addComment">Add comment</button>
      </div>
    </form>
  )
}

export default NewComment