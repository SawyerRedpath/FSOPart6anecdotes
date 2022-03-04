import { createAnecdote } from '../reducers/anecdoteReducer'
import { showNotification, hideNotification } from '../reducers/notificationReducer'
import { useDispatch } from 'react-redux'
import anecdotesService from '../services/anecdotes'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const addAnecdote = async (event) => {
    event.preventDefault()

    const newAnecdote = await anecdotesService.createNew(event.target.anecdote.value)
    event.target.anecdote.value = ''

    dispatch(createAnecdote(newAnecdote))
    dispatch(showNotification(`Created anecdote: '${newAnecdote.content}'`))

    setTimeout(() => {
      dispatch(hideNotification())
    }, 1000)
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <input name='anecdote' />
        <button type='submit'>create anecdote</button>
      </form>
    </div>
  )
}

export default AnecdoteForm