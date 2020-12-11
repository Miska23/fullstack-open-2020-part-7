import React from 'react'

const UserList = ({ blogs, users, onSelectUser }) => {


  const getBlogCountForUser = (userName, blogs) => {
    let mapped = blogs.filter((blog) => blog.user.username === userName)
    return mapped.length
  }



  return (
    <div>
      <h2>Users</h2>
      <div style={{ display: 'flex', flexFlow: 'column wrap', width: '20%' }} >
        <div style={{ display: 'flex' }} >
          <div style={{ width: '50%' }}></div>
          <div style={{ width: '50%',  fontWeight: 'bold' }}>
            blogs created
          </div>
        </div>
        {users.map((user, index) => {
          return (
            <div key={index} style={{ display: 'flex' }} >
              <div style={{ width: '50%' }}>
                <a href="/" onClick={(event) => onSelectUser(event, user)}>{user.name}</a>
              </div>
              <div style={{ width: '50%' }}>
                {getBlogCountForUser(user.username, blogs)}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}


export default UserList