import React from 'react'
import NewComment from './NewComment'

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'

const Blog = ({ blog, handleLike, handleRemove, loginState }) => {

  return (
    (blog && loginState.user)
      ?
      <div>
        <Card border='info' text='dark' >
          <Card.Body>
            <Card.Title>{blog.title} by {blog.author}</Card.Title>
            <Card.Subtitle>{blog.url}</Card.Subtitle>
            <Card.Text>{blog.likes}</Card.Text>
            <div>Added by {blog.user.name}</div>
            {blog.user.username === loginState.user.username  &&<Button variant='outline-warning' size='smalll' onClick={() => handleRemove(blog.id)}>remove</Button>}
            <Button variant='outline-primary' size='small' onClick={() => handleLike(blog.id)}>like</Button>
          </Card.Body>
        </Card>
        <div style={{ marginBottom: '1rem' }}>
          <h2 className='my-4'>Comments</h2>
          <NewComment blogId={blog.id}/>
          {blog.comments.sort(({ timestamp: stampA }, { timestamp: stampB }) => stampB - stampA).map((comment) =>
            <Card key={comment._id} border='secondary' text='info' >
              <Card.Body style={{ padding: '1rem' }}>
                <Card.Text>
                  {comment.content}
                </Card.Text>
              </Card.Body>
            </Card>
          )}
        </div>
      </div>
      :
      <Spinner animation="border" variant="dark" />
  )
}

export default Blog