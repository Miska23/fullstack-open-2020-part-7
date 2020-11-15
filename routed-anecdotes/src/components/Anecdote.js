import React from 'react'
import { useParams } from 'react-router-dom'

const Anecdote = ({ anecdotes }) => {
  const id = useParams().id

  const anecdote = anecdotes.find(anecdote => anecdote.id === id)
  return (
    <div>
      <div>
        {anecdote.content}
      </div>
      <div>
        {anecdote.author}
      </div>
      <div>
        {anecdote.url}
      </div>
      <div>
        {`Votes: ${anecdote.votes}`}
      </div>
    </div>
  )
}

export default Anecdote
