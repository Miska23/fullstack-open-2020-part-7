import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Blog from './components/Blog'
import Notification from './components/Notification'
import Togglable from './components/Togglable'
import NewBlog from './components/NewBlog'

import { setNotification } from './reducers/notificationReducer'
import { initializeBlogs, likeBlog, removeBlog } from './reducers/blogReducer'
import { logUserIn, setLoggedInUser, logUserOut } from './reducers/loginReducer'
import { initializeUsers } from './reducers/userReducer'
import UserList from './components/UserList'

const App = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeBlogs())
  }, [dispatch])

  useEffect(() => {
    dispatch(initializeUsers())
  }, [dispatch])

  useEffect(() => {
    dispatch(setLoggedInUser())
  }, [])

  const blogs = useSelector(state => state.blogs)

  const users = useSelector(state => state.users)

  const loginState = useSelector(state => state.login)

  const blogFormRef = React.createRef()

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
    dispatch(setNotification(`you liked '${blogToLike.title}' by ${blogToLike.author} added!`, 10, 'success'))
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
    <div>
      <h2>blogs</h2>

      <Notification />

      <p>
        {loginState.user.name} logged in <button onClick={handleLogout}>logout</button>
      </p>

      <Togglable buttonLabel='create new blog'  ref={blogFormRef}>
        <NewBlog />
      </Togglable>

      {blogs.map(blog =>
        <Blog
          key={blog.id}
          blog={blog}
          handleLike={handleLike}
          handleRemove={handleRemove}
          own={loginState.user.username===blog.user.username}
        />
      )}

      <UserList users={users}/>

    </div>
  )
}

export default App