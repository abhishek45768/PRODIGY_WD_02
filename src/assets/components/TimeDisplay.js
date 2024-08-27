import React from 'react';

const TimeDisplay = ({ time }) => {
  const formatTime = time => {
    const getMilliseconds = `0${(time % 1000) / 10}`.slice(-2);
    const getSeconds = `0${Math.floor((time / 1000) % 60)}`.slice(-2);
    const getMinutes = `0${Math.floor((time / 60000) % 60)}`.slice(-2);
    return `${getMinutes}:${getSeconds}:${getMilliseconds}`;
  };

  return (
    <div className="time-display">
      {formatTime(time)}
    </div>
  );
};

export default TimeDisplay;
