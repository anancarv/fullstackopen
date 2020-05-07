import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const User = ({ user }) => {
  return (
  <div>
    <Link to={`/users/${user.id}`}>{user.name}</Link> has {user.blogs.length} blogs
  </div>
  )
}

const UserList = () => {
  const users = useSelector((state) => state.users)
  return users.map((user) => <User key={user.id} user={user} />)
}

export default UserList
