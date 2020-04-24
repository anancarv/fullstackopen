const notificationReducer = (state = null, action) => {
    switch (action.type) {
      case 'NEW_NOTIFICATION':
        return action.notification
      case 'HIDE_NOTIFICATION':
        return action.notification
      default:
        return state
    }
  }

export const setNotification = (notification, displayTime) => {
  return async dispatch => {
    dispatch({
      type: 'NEW_NOTIFICATION',
      notification,
    })

    setTimeout(() => {
      dispatch({
        type: 'HIDE_NOTIFICATION',
        notification: null
      })
    }, displayTime * 1000)
  }
}

export default notificationReducer