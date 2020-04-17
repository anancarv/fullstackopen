import React from 'react'
import PropTypes from 'prop-types'

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleLogin}>
      <div>
        username <input type="text" value={props.username} name="Username" onChange={({ target }) => props.setUsername(target.value)}/>
      </div>
      <div>
        password <input type="password" value={props.password} name="Password" onChange={({ target }) => props.setPassword(target.value)}/>
      </div>
      <button type="submit">login</button>
    </form>
  )}

LoginForm.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  setUsername: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired
}

export default LoginForm
