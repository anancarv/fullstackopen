import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { like, deleteBlog } from '../reducers/blogReducer'
import { setNotification } from '../reducers/notificationReducer'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import PropTypes from 'prop-types'

const Blog = ({ blog }) => {
  const dispatch = useDispatch()

  const [visible, setVisible] = useState(false)
  const showWhenVisible = { display: visible ? '' : 'none' }
  const buttonLabel = visible ? 'hide' : 'view'

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  const increaseLikes = () => {
    dispatch(like(blog))
    dispatch(
      setNotification(`Blog ${blog.title} successfully updated`, 'success', 5)
    )
  }

  const removeBlog = () => {
    dispatch(deleteBlog(blog.id))
    dispatch(
      setNotification(`Blog ${blog.title} successfully deleted`, 'success', 5)
    )
  }

  return (
    <tr>
      <td>
        <div className="blog">
          <div>
            <p>
            <Link to={`/blogs/${blog.id}`}>{blog.title} - {blog.author}</Link>{' '}
              <Button variant="primary" onClick={toggleVisibility}>{buttonLabel}</Button>
            </p>
          </div>
          <div style={showWhenVisible}>
            <p>{blog.url}</p>
            <p>
              {blog.likes}{' '}
              <Button variant="primary" id="like-button" onClick={increaseLikes}>
                like
              </Button>
            </p>
            <Button variant="danger" id="remove" onClick={removeBlog}>
              remove
            </Button>
          </div>
        </div>
      </td>
    </tr>
  )
}

Blog.propTypes = {
  blog: PropTypes.object.isRequired
}

export default Blog
