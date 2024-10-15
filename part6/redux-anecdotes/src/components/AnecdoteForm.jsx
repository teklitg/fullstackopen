import React from 'react';
import { useDispatch } from 'react-redux';
import { addAnecdoteWithNotification } from '../reducers/anecdoteReducer'; // Use the new action

const AnecdoteForm = () => {
  const dispatch = useDispatch();
  const [content, setContent] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (content) {
      dispatch(addAnecdoteWithNotification(content)); // Use the thunk
      setContent(''); // Clear input
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div><input value={content} onChange={(e) => setContent(e.target.value)} /></div>
      <button type="submit">create</button>
    </form>
  );
};

export default AnecdoteForm;
