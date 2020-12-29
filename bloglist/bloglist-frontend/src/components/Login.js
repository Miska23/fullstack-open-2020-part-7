import React, { useState } from 'react'
import { Fragment } from 'react'
import Notification from './Notification'

const Login = ({ logUserIn }) => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')


  const handleLogin = (event) => {
    event.preventDefault()
    logUserIn({ username, password })
    setUsername('')
    setPassword('')
  }

  return (
    <Fragment>
      <h2>login to application</h2>
      <Notification/>
      <form onSubmit={handleLogin}>
        <div>
        username
          <input
            id='username'
            value={username}
            onChange={({ target }) => setUsername(target.value)}
          />
        </div>
        <div>
        password
          <input
            id='password'
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <button id='login'>login</button>
      </form>
    </Fragment>
  )
}


export default Login