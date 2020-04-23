import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'

const Anecdote = ({ anecdote }) => {
    const dispatch = useDispatch()
    return (
    <div>
        <div>
            {anecdote.content}
        </div>
        <div>
            has {anecdote.votes}
            <button onClick={() => dispatch(vote(anecdote.id))}>vote</button>
        </div>
    </div>
    )
}

const AnecdoteList = () => {
  const anecdotes = useSelector(state => state)
  const byVotes = (b1, b2) => b2.votes - b1.votes

  return(
    anecdotes.sort(byVotes).map(anecdote => <Anecdote key={anecdote.id} anecdote={anecdote} />)
  )
}

export default AnecdoteList