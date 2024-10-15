// src/components/AnecdoteList.jsx

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { voteAnecdoteWithNotification } from '../reducers/anecdoteReducer'; // Ensure correct path
import { selectVisibleAnecdotes } from '../reducers/anecdoteReducer'; // Import the selector

const AnecdoteList = () => {
  const anecdotes = useSelector(selectVisibleAnecdotes); // Use the selector
  const dispatch = useDispatch();

  const handleVote = (id) => {
    dispatch(voteAnecdoteWithNotification(id)); // Dispatch the vote action with notification
  };

  return (
    <div>
      {anecdotes.map(anecdote => 
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnecdoteList;
