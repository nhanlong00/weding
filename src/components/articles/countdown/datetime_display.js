import React from 'react';

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <div className={isDanger ? 'countdown danger' : 'countdown'}>
      <p className='time'>{value}</p>
      <span className='date'>{type}</span>
    </div>
  );
};

export default DateTimeDisplay;
