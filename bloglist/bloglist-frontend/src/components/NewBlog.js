import React, { useState } from 'react'

import { useDispatch } from 'react-redux'

import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

import { createBlog } from '../reducers/blogReducer'
import { setNotification } from '../reducers/notificationReducer'


const NewBlog = () => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')

  const dispatch = useDispatch()

  const handleNewBlog = (event) => {
    event.preventDefault()

    const newBlog = {
      title, author, url
    }

    dispatch(createBlog(newBlog))

    dispatch(setNotification(`a new blog '${newBlog.title}' by ${newBlog.author} added!`, 10, 'success'))

    setTitle('')
    setAuthor('')
    setUrl('')
  }

  return (
    <div>
      <h4 className="my-4">Create new</h4>
      <Form onSubmit={handleNewBlog}>
        <Form.Group controlId="author">
          <Form.Label>Author</Form.Label>
          <Form.Control type="text" value={author} placeholder='Author' onChange={({ target }) => setAuthor(target.value)}/>
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" value={title} placeholder='Title' onChange={({ target }) => setTitle(target.value)}/>
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="url">
          <Form.Label>Url</Form.Label>
          <Form.Control type="text" value={url} placeholder='Url' onChange={({ target }) => setUrl(target.value)}/>
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
        <Button type='submit' variant='outline-primary' size='sm'>Create</Button>
      </Form>
    </div>
  )
}

export default NewBlog