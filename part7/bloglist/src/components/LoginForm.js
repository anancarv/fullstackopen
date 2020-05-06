import React from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../reducers/userReducer'
import { initializeBlogs } from '../reducers/blogReducer'

const LoginForm = () => {
  const dispatch = useDispatch()

  const handleLogin = async (event) => {
    event.preventDefault()
    const username = event.target.username.value
    const password = event.target.password.value
    event.target.username.value = ''
    event.target.password.value = ''
    dispatch(login(username, password))
    dispatch(initializeBlogs())
  }

  return (
    <form onSubmit={handleLogin}>
      <div>
        username <input id="username" type="text" name="username" />
      </div>
      <div>
        password <input id="password" type="password" name="password" />
      </div>
      <button id="login-button" type="submit">
        login
      </button>
    </form>
  )
}

export default LoginForm
