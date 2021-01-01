import React, { Fragment } from 'react'

import { Link } from 'react-router-dom'

import Card from 'react-bootstrap/Card'
import Spinner from 'react-bootstrap/Spinner'

import Togglable from './Togglable'
import NewBlog from './NewBlog'

const Blogs = ({ blogs }) => {

  return (
    <div>
      {blogs ?
        <Fragment>
          <Togglable buttonLabel='create new blog'>
            <NewBlog />
          </Togglable>
          {blogs.map((blog, index) =>
            <Card as={Link} to={`/blogs/${blog.id}`} key={blog.id} border='info' bg={index % 2 === 0 && 'info'} >
              <Card.Body> {blog.title} {blog.author}</Card.Body>
            </Card>
          )}
        </Fragment>
        :
        <Spinner animation="border" variant="dark" />
      }
    </div>
  )
}


export default Blogs