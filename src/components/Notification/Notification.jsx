import React from 'react';
import PropTypes from 'prop-types';

const Notification = ({ message }) => (
  <div className="notification">
    <p>{message}</p>
  </div>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
