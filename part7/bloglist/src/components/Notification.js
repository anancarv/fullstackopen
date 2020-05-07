import React from 'react'
import { useSelector } from 'react-redux'
import { Alert } from 'react-bootstrap'

const Notification = () => {
  const notification = useSelector((state) => state.notification)

  if (notification === null) {
    return null
  }

  if (notification.type === 'success') {
    return (
      <div>
        <Alert variant="success">
          {notification.message}
        </Alert>
      </div>)
  } else {
    return (
      <div>
        <Alert variant="warning">
          {notification.message}
        </Alert>
      </div>)
  }
}

export default Notification
