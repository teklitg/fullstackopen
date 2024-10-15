import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { addAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteForm = () => {
  const dispatch = useDispatch()
  const inputRef = useRef()

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
      <h2>Create new</h2>
      <form onSubmit={addNewAnecdote}>
        <div><input ref={inputRef} /></div>
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
