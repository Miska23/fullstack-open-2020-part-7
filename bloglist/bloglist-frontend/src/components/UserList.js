import React from 'react'

const UserList = ({ users }) => {

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
                {user.name}
              </div>
              <div style={{ width: '50%' }}>
                {user.blogs.length}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}


export default UserList