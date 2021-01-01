import React, { useState } from 'react'
import { Fragment } from 'react'

import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

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
      <h4 className='my-4'>Login to application</h4>
      <Notification/>
      <Form onSubmit={handleLogin}>
        <Form.Group controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" value={username} placeholder='Username' onChange={({ target }) => setUsername(target.value)}/>
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" value={password} placeholder='password' onChange={({ target }) => setPassword(target.value)}/>
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
        <Button type='submit' variant='outline-primary' size='sm' className='mb-2'>Login</Button>
      </Form>
    </Fragment>
  )
}


export default Login