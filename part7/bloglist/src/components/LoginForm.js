import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { login } from '../reducers/authReducer'
import { initializeBlogs } from '../reducers/blogReducer'
import { Form, Button } from 'react-bootstrap'

const LoginForm = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const handleLogin = async (event) => {
    event.preventDefault()
    const username = event.target.username.value
    const password = event.target.password.value
    event.target.username.value = ''
    event.target.password.value = ''
    dispatch(login(username, password))
    dispatch(initializeBlogs())
    history.push('/blogs')
  }

  return (
    <Form onSubmit={handleLogin}>
        <Form.Group>
          <Form.Label>username:</Form.Label>
          <Form.Control
            type="text"
            name="username"
            id="username"
          />
          <Form.Label>password:</Form.Label>
          <Form.Control
            type="password"
            id="password"
            name="password"
          />
          <Button variant="primary" type="submit">
            login
          </Button>
        </Form.Group>
      </Form>
  )
}

export default LoginForm
