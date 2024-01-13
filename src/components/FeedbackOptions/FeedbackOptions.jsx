import React from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css'

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className={s.btnWrap}>
    {options.map(option => (
      <button className={s.btn} key={option} type="button" onClick={() => onLeaveFeedback(option)}>
        {option}
      </button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
