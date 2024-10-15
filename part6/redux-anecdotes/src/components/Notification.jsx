import React from 'react';
import { useSelector } from 'react-redux';

const Notification = () => {
  const notification = useSelector(state => state.notifications);

  if (!notification) {
    return null; // Don't render anything if there's no notification
  }

  const notificationStyle = {
    border: '1px solid green',
    padding: '10px',
    margin: '10px 0',
    color: 'green',
    backgroundColor: '#e6ffe6',
  };

  return (
    <div style={notificationStyle}>
      {notification}
    </div>
  );
};

export default Notification;
