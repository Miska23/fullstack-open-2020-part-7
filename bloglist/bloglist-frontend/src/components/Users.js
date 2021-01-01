import React from 'react'
import { Link } from 'react-router-dom'

import Card from 'react-bootstrap/Card'

const Users = ({ blogs, users }) => {

  const getBlogCountForUser = (userName, blogs) => {
    let usersBlogs = blogs.filter((blog) => blog.user.username === userName)
    return usersBlogs.length
  }

  return (
    <div>
      <h4 className='my-4'>Users</h4>
      {users.map(user =>
        <Card as={Link} to={`/users/${user.id}`} key={user.id} border='secondary' >
          <Card.Body>
            <Card.Title>
              {user.username}
            </Card.Title>
            <Card.Subtitle>
                Blogs created: {getBlogCountForUser(user.username, blogs)}
            </Card.Subtitle>
          </Card.Body>
        </Card>
      )}
    </div>
  )
}


export default Users