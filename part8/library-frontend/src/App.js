import React, { useState } from 'react'
import { useApolloClient } from '@apollo/client'

import Authors from './components/Authors'
import Books from './components/Books'
import BookForm from './components/BookForm'
import LoginForm from './components/LoginForm'
import Recommended from './components/Recommended'

const Notify = ({errorMessage}) => {  
  if ( !errorMessage ) {    
    return null  
  }  
  return (    
    <div style={{color: 'red'}}>    
    {errorMessage}    
    </div>  
    )
 }

const App = () => {
  const [token, setToken] = useState(null)
  const [page, setPage] = useState('authors')
  const [errorMessage, setErrorMessage] = useState(null)
  const client = useApolloClient()

  const notify = (message) => {    
    setErrorMessage(message)    
    setTimeout(() => {      
      setErrorMessage(null)    
    }, 10000)  
  }

  const logout = () => {    
    setToken(null)    
    localStorage.clear()    
    client.resetStore()  
  }

  if (!token) {
    return (
      <div>
        <Notify errorMessage={errorMessage} />
        <h2>Login</h2>
        <LoginForm
          setToken={setToken}
          setError={notify}
        />
      </div>
    )
  }

  return (
    <div>
      <div>
      <button onClick={logout}>logout</button>
        <button onClick={() => setPage('authors')}>authors</button>
        <button onClick={() => setPage('books')}>books</button>
        <button onClick={() => setPage('recommended')}>recommended</button>
        <button onClick={() => setPage('add')}>add book</button>
      </div>

      <Notify errorMessage={errorMessage} />

      <Authors
        show={page === 'authors'} notify={notify}
      />

      <Books
        show={page === 'books'}
      />

      <Recommended
        show={page === 'recommended'} notify={notify}
      />

      <BookForm
        show={page === 'add'} notify={notify}
      />

    </div>
  )
}

export default App