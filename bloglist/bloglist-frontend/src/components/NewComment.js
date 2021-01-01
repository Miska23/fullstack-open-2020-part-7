import React, { useState } from 'react'

import { useDispatch } from 'react-redux'

import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

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
    <Form onSubmit={handleNewComment}>
      <Form.Group controlId="comment">
        <Form.Label>Comment</Form.Label>
        <Form.Control type="text" value={content} placeholder='Comment' onChange={({ target }) => setContent(target.value)}/>
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Button type='submit' variant='outline-primary' size='sm' className='mb-2'>Add comment</Button>
    </Form>
  )
}

export default NewComment