import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Switch, Route, useHistory } from 'react-router-dom'
import Menu from './components/Menu'
import UserList from './components/UserList'
import LoginForm from './components/LoginForm'
import BlogList from './components/BlogList'
import BlogForm from './components/BlogForm'
import Togglable from './components/Togglable'
import Notification from './components/Notification'
import { initializeBlogs } from './reducers/blogReducer'
import { initializeAllUsers } from './reducers/userReducer'
import { initializeUser, logout } from './reducers/authReducer'

const App = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const user = useSelector((state) => state.user)

  const blogFormRef = React.createRef()

  useEffect(() => {
    dispatch(initializeUser())
    dispatch(initializeBlogs())
    dispatch(initializeAllUsers())
  }, [dispatch])

  const handleLogout = async (event) => {
    event.preventDefault()
    dispatch(logout())
    history.push('/')
  }

  return (
    <Switch>
      <Route path="/blogs">
        {user === null ? (
            <div>
              <Notification />
              <LoginForm />
            </div>
          ) : (
            <div>
              <h2>Bloglist</h2>
              <Notification />
              <Menu />
                <p>
                  {user.name} logged in
                  <button onClick={handleLogout} type="submit">
                    logout
                  </button>
                </p>
                <Togglable buttonLabel="Add new blog" ref={blogFormRef}>
                  <BlogForm />
                </Togglable>
                <BlogList />
            </div>
          )}
      </Route>
      <Route path="/users">
        {user === null ? (
          <div>
            <Notification />
            <LoginForm />
          </div>
        ) : (
          <div>
            <h2>Bloglist</h2>
            <Notification />
            <Menu />
              <p>
                {user.name} logged in
                <button onClick={handleLogout} type="submit">
                  logout
                </button>
              </p>
              <h2>Users</h2>
              <UserList />
          </div>
        )}
      </Route>
      <Route path="/">
        <Notification />
        <LoginForm />
      </Route>
    </Switch>
  )
}

export default App
