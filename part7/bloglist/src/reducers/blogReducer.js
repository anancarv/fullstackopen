import blogService from '../services/blogs'
import { setNotification } from '../reducers/notificationReducer'

const blogReducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT_BLOGS':
      return action.data
    case 'NEW_BLOG':
      return state.concat(action.data)
    case 'DELETE_BLOG':
      return state.filter((blog) => blog.id !== String(action.data))
    case 'LIKE': {
      const id = action.data.id
      const updatedBlog = state.find((blog) => blog.id === id)
      const changedBlog = {
        ...updatedBlog,
        likes: updatedBlog.likes + 1
      }
      return state.map((blog) => (blog.id !== id ? blog : changedBlog))
    }
    case 'COMMENT':
      const id = action.data.id
      const updatedBlog = state.find((blog) => blog.id === id)
      const changedBlog = {
        ...updatedBlog,
        comments: action.data.comments
      }
      return state.map((blog) => (blog.id !== id ? blog : changedBlog))
    default:
      return state
  }
}

export const initializeBlogs = () => {
  return async (dispatch) => {
    const blogs = await blogService.getAll()
    dispatch({
      type: 'INIT_BLOGS',
      data: blogs
    })
  }
}

export const createBlog = (content) => {
  return async (dispatch) => {
    try {
      const newBlog = await blogService.create(content)
      dispatch({
        type: 'NEW_BLOG',
        data: newBlog
      })
    } catch (exception) {
      dispatch(
        setNotification(`cannot create blog ${content.title}`, 'error', 5)
      )
    }
  }
}

export const deleteBlog = (id) => {
  return async (dispatch) => {
    try {
      await blogService.remove(id)
      dispatch({
        type: 'DELETE_BLOG',
        data: id
      })
    } catch (exception) {
      dispatch(setNotification(`cannot delete blog`, 'error', 5))
    }
  }
}

export const like = (blog) => {
  return async (dispatch) => {
    try {
      console.log(blog)
      const updatedBlog = await blogService.update({
        ...blog,
        likes: blog.likes + 1
      })
      dispatch({
        type: 'LIKE',
        data: updatedBlog
      })
    } catch (exception) {
      dispatch(setNotification(`cannot update blog ${blog.title}`, 'error', 5))
    }
  }
}

export const comment = (blog, comment) => {
  return async (dispatch) => {
    try {
      const updatedBlog = await blogService.update({
        ...blog,
        comments: blog.comments.concat([comment])
      })
      dispatch({
        type: 'COMMENT',
        data: updatedBlog
      })
    } catch (exception) {
      dispatch(setNotification(`cannot update blog ${blog.title}`, 'error', 5))
    }
  }
}

export default blogReducer
