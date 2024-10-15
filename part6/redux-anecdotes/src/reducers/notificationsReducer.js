import { createSlice } from '@reduxjs/toolkit';

const notificationSlice = createSlice({
  name: 'notifications',
  initialState: null,
  reducers: {
    setNotification(state, action) {
      return action.payload;
    },
    clearNotification(state) {
      return null;
    }
  }
});

// Export actions
export const { setNotification, clearNotification } = notificationSlice.actions;

// Thunk for setting notification with a timeout
export const setNotificationWithTimeout = (message, seconds) => {
  return dispatch => {
    dispatch(setNotification(message));
    setTimeout(() => {
      dispatch(clearNotification());
    }, seconds * 1000);
  };
};

// Export reducer
export default notificationSlice.reducer;
