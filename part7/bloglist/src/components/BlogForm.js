import React from 'react'
import { useDispatch } from 'react-redux'
import { createBlog } from '../reducers/blogReducer'
import { setNotification } from '../reducers/notificationReducer'

const BlogForm = () => {
  const dispatch = useDispatch()

  const createNewBlog = async (event) => {
    event.preventDefault()
    const title = event.target.title.value
    const author = event.target.author.value
    const url = event.target.url.value

    event.target.title.value = ''
    event.target.author.value = ''
    event.target.url.value = ''

    const blogToCreate = {
      title: title,
      author: author,
      url: url
    }

    dispatch(createBlog(blogToCreate))
    dispatch(
      setNotification(`Blog ${title} successfully created`, 'success', 5)
    )
  }

  return (
    <form onSubmit={createNewBlog}>
      <div>
        Title: <input id="title" name="title" />
      </div>
      <div>
        Author: <input id="author" name="author" />
      </div>
      <div>
        Url: <input id="url" name="url" />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default BlogForm
