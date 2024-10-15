import { createSlice, createSelector } from '@reduxjs/toolkit';

// Utility function to generate unique IDs
const getId = () => (100000 * Math.random()).toFixed(0);

// Create the slice
const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [
    {
      content: 'If it hurts, do it more often',
      id: getId(),
      votes: 0
    },
    {
      content: 'Adding manpower to a late software project makes it later!',
      id: getId(),
      votes: 0
    },
    {
      content: 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
      id: getId(),
      votes: 0
    },
    {
      content: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
      id: getId(),
      votes: 0
    },
    {
      content: 'Premature optimization is the root of all evil.',
      id: getId(),
      votes: 0
    },
    {
      content: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
      id: getId(),
      votes: 0
    }
  ],
  reducers: {
    voteAnecdote(state, action) {
      const id = action.payload;
      const anecdoteToVote = state.find(a => a.id === id);
      if (anecdoteToVote) {
        anecdoteToVote.votes += 1; // Increment votes immutably
      }
    },
    addAnecdote(state, action) {
      const newAnecdote = {
        content: action.payload,
        id: getId(),
        votes: 0
      };
      state.push(newAnecdote); // Add new anecdote immutably
    }
  }
});

// Export action creators
export const { voteAnecdote, addAnecdote } = anecdoteSlice.actions;

// Selector for visible anecdotes
export const selectVisibleAnecdotes = createSelector(
  (state) => state.anecdotes,
  (state) => state.filter,
  (anecdotes, filter) => {
    return anecdotes
      .filter(anecdote => anecdote.content.toLowerCase().includes(filter.toLowerCase()))
      .sort((a, b) => b.votes - a.votes); // Sort by votes in descending order
  }
);

// Export the reducer
export default anecdoteSlice.reducer;
