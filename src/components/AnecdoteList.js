import { useSelector, useDispatch } from 'react-redux'
import { voteForAnecdote } from '../reducers/anecdoteReducer'
import { showNotification, hideNotification } from '../reducers/notificationReducer'

const Anecdote = ({ anecdote }) => {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(voteForAnecdote(anecdote.id))
    dispatch(showNotification(`Voted for anecdote: ${anecdote.content}`))
    setTimeout(() => {
      dispatch(hideNotification())
    }, 5000)
  }

  return (
    <div key={anecdote.id}>
      <div>{anecdote.content}</div>
      <div>
        has {anecdote.votes}
        <button onClick={handleClick}>vote</button>
      </div>
    </div>
  )
}

const AnecdoteList = () => {
  const unsortedAnecdotes = useSelector((state => state.anecdotes))
  const sortedAnecdotes = [...unsortedAnecdotes].sort((a, b) => a.votes - b.votes).reverse()

  return (
    <div>
      {sortedAnecdotes.map(anecdote =>
        <Anecdote
          key={anecdote.id}
          anecdote={anecdote}
        />
      )}
    </div>
  )
}

export default AnecdoteList