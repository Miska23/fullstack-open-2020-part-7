import React from 'react'

const User = ({ user }) => {

  return (
    user
      ?
      <div>
        <h2>{user.name}</h2>
        <div style={{ display: 'flex', flexFlow: 'column wrap', width: '20%' }} >
          <div style={{ display: 'flex' }} >
            <div style={{ width: '50%',  fontWeight: 'bold' }}>
            added blogs
            </div>
          </div>
          {user.blogs.map((blog, index) => {
            return (
              <div key={index} >
                {blog.title}
              </div>
            )
          })}
        </div>
      </div>
      :
      <div>Fetching data... </div>
  )
}


export default User