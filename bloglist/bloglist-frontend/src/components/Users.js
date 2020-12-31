import React from 'react'
import { Link } from 'react-router-dom'

const Users = ({ blogs, users }) => {

  const getBlogCountForUser = (userName, blogs) => {
    let usersBlogs = blogs.filter((blog) => blog.user.username === userName)
    return usersBlogs.length
  }

  return (
    <div>
      <h2>Users</h2>
      <ul style={{ listStyle: 'none' }}>
        {users.map(user =>
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
            Blogs created: {getBlogCountForUser(user.username, blogs)}
          </li>
        )}
      </ul>
    </div>
  )
}


export default Users