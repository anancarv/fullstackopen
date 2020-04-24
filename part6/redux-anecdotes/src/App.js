import React from 'react'
import NewAnecdote from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'
import Filter from './components/Filter'

const App = () => {
  return (
    <div>
      <h2>create new</h2>
      <NewAnecdote />
      <h2>Anecdotes</h2>
      <Notification />
      <Filter />
      <AnecdoteList />
    </div>
  )
}

export default App