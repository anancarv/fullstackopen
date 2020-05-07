import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../reducers/authReducer'
import { Button } from 'react-bootstrap'
import { Navbar, Nav } from 'react-bootstrap'

const Menu = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const user = useSelector((state) => state.user)

  const padding = {
    padding: 5
  }

  const style = {
    padding: 5,
    color: 'white'
  }

  const handleLogout = async (event) => {
    event.preventDefault()
    dispatch(logout())
    history.push('/')
  }

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#" as="span">
            <Link style={padding} to="/blogs">blogs</Link>
          </Nav.Link>
          <Nav.Link href="#" as="span">
            <Link style={padding} to="/users">users</Link>
          </Nav.Link>
          <span style={style}>{user.name} logged in {' '}</span>
          <Button variant="danger" onClick={handleLogout} type="submit">
            logout
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Menu
