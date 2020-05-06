import React from 'react'
import { useSelector } from 'react-redux'

const User = ({ user }) => {
  return (
  <div>
    {user.name} has {user.blogs.length} blogs
  </div>
  )
}

const UserList = () => {
  const users = useSelector((state) => state.users)
  return users.map((user) => <User key={user.id} user={user} />)
}

export default UserList
