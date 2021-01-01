import React from 'react'

import Card from 'react-bootstrap/Card'
import Spinner from 'react-bootstrap/Spinner'

const User = ({ user }) => {

  return (
    user
      ?
      <Card border='info' text='dark' >
        <Card.Body>
          <Card.Title>{user.name}</Card.Title>
          <Card.Subtitle className='mb-2'> Added blogs</Card.Subtitle>
          {user.blogs.map(blog =>
            <Card.Text className='border border-info rounded' key={blog.id}> {blog.title}</Card.Text>
          )}
        </Card.Body>
      </Card>
      :
      <Spinner animation="border" variant="dark" />
  )
}


export default User