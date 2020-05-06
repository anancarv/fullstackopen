import React from 'react'
import { useSelector } from 'react-redux'

const Notification = () => {
  const notification = useSelector((state) => state.notification)

  const style = {
    background: 'lightgrey',
    font_size: 20,
    border_style: 'solid',
    border_radius: 5,
    padding: 10,
    margin_bottom: 10
  }

  if (notification === null) {
    return null
  }

  if (notification.type === 'success') {
    const success = { ...style, color: 'green' }
    return <div style={success}>{notification.message}</div>
  } else {
    const error = { ...style, color: 'red' }
    return <div style={error}>{notification.message}</div>
  }
}

export default Notification
