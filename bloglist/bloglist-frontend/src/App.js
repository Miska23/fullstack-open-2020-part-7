import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  BrowserRouter as Router,
  Switch, Route, Link
} from 'react-router-dom'

import Notification from './components/Notification'
import Home from './components/Home'
import Blogs from './components/Blogs'
import Users from './components/Users'

import { setNotification } from './reducers/notificationReducer'
import { initializeBlogs, likeBlog, removeBlog } from './reducers/blogReducer'
import { logUserIn, setLoggedInUser, logUserOut } from './reducers/loginReducer'
import { initializeUsers } from './reducers/userReducer'

const App = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [selectedUser, setSelectedUser] = useState('')

  const dispatch = useDispatch()

  const blogs = useSelector(state => state.blogs)

  const users = useSelector(state => state.users)

  const loginState = useSelector(state => state.login)

  useEffect(() => {
    dispatch(initializeBlogs())
  }, [dispatch])

  useEffect(() => {
    dispatch(initializeUsers())
  }, [dispatch])

  useEffect(() => {
    dispatch(setLoggedInUser())
  }, [dispatch])

  const handleLogin = (event) => {
    event.preventDefault()
    dispatch(logUserIn({
      username, password
    }))
    setUsername('')
    setPassword('')
  }

  const handleLike = (id) => {
    const blogToLike = blogs.find(blog => blog.id === id)
    dispatch(likeBlog(blogToLike))
    dispatch(setNotification(`you liked '${blogToLike.title}' by ${blogToLike.author} !`, 10, 'success'))
  }

  const handleRemove = (id) => {
    const blogToRemove = blogs.find(blog => blog.id === id)
    const ok = window.confirm(`Remove blog ${blogToRemove.title} by ${blogToRemove.author}`)
    if (ok) {
      dispatch(removeBlog(blogToRemove.id))
      dispatch(setNotification(`you removed '${blogToRemove.title}' by ${blogToRemove.author}!`, 10, 'success'))
    }
  }

  const handleLogout = () => {
    dispatch(logUserOut())
  }

  const onSelectUser = (event, user) => {
    event.preventDefault()
    setSelectedUser(user)
  }

  if ( !loginState.user ) {
    return (
      <div>
        <h2>login to application</h2>

        <Notification />

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
      </div>
    )
  }

  return (

    <Router>
      <div>
        <Link to="/">home</Link>
        <Link to="/blogs">blogs</Link>
        <Link to="/users">users</Link>
      </div>

      <h2>blogs</h2>


      <Notification />

      <p>
        {loginState.user.name} logged in <button onClick={handleLogout}>logout</button>
      </p>
      <Switch>
        <Route path="/blogs">
          <Blogs
            blogs={blogs}
            handleLike={handleLike}
            handleRemove={handleRemove}
            loginState={loginState}
          />
        </Route>
        <Route path="/users">
          <Users
            clearSelectedUser={() => setSelectedUser(null)}
            onSelectUser={(event, user) => onSelectUser(event,user)}
            selectedUser={selectedUser}
            users={users}
            blogs={blogs}
          />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App