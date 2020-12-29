import React, { Fragment, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  useRouteMatch,
  Switch, Route, Link, useHistory
} from 'react-router-dom'

import Notification from './components/Notification'
import Home from './components/Home'
import Blogs from './components/Blogs'
import Blog from './components/Blog'
import Users from './components/Users'

import { setNotification } from './reducers/notificationReducer'
import { initializeBlogs, likeBlog, removeBlog } from './reducers/blogReducer'
import { logUserIn, setLoggedInUser, logUserOut } from './reducers/loginReducer'
import { initializeUsers } from './reducers/userReducer'
import Login from './components/Login'

const App = () => {

  const history = useHistory()

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

  const match = useRouteMatch('/blogs/:id')
  const blog = match
    ? blogs.find(blog => blog.id === match.params.id)
    : null

  const login = (credentials) => {
    const { username, password } = credentials
    dispatch(logUserIn({
      username, password
    }))
    history.push('/')
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

  if (!loginState.user) {
    return (
      <Switch>
        <Route path="/login">
          <Login
            logUserIn={login}
          />
        </Route>
        {/* <Route path="/">
          <Redirect to="/login" />
        </Route> */}
      </Switch>
    )
  } else {
    return (
      <Fragment>
        <ul style={{
          'listStyle': 'none',
          'display': 'flex',
          'alignItems': 'center',
          'justifyContent': 'space-between',
          'width': '60%',
          'padding': '0',
        }} >
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/blogs">blogs</Link>
          </li>
          <li>
            <Link to="/users">users</Link>
          </li>
          <li>
            <p>
              {loginState.user ? loginState.user.name : null} is logged in <button onClick={handleLogout}>logout</button>
            </p>
          </li>
        </ul>
        <h2>Blog application</h2>
        <Notification />
        <Switch>
          <Route path="/blogs/:id">
            <Blog
              blog={blog}
              handleLike={handleLike}
              handleRemove={handleRemove}
              loginState={loginState}
            />
          </Route>
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
      </Fragment>
    )
  }

}

export default App