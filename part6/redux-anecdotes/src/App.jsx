import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addAnecdote, voteAnecdote } from './reducers/anecdoteReducer';

const App = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()
  const inputRef = useRef()

  const vote = (id) => {
    dispatch(voteAnecdote(id))
  }

  const addNewAnecdote = (event) => {
    event.preventDefault()
    const content = inputRef.current.value
    if (content) {
      dispatch(addAnecdote(content))
      inputRef.current.value = ''
    }
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      <h2>Create new</h2>
      <form onSubmit={addNewAnecdote}>
        <div><input ref={inputRef} /></div>
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default App;
