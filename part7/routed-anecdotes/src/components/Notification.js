import React from 'react'
import PropTypes from 'prop-types'

const Notification = ({ notification }) => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  if (notification === null) {
    return null
  }

  return <div style={style}>{notification}</div>
}

Notification.propTypes = {
  notification: PropTypes.string
}

export default Notification
