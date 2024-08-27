import React, { useState, useEffect } from 'react';

import './Stopwatch.css';

const Stopwatch = () => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [laps, setLaps] = useState([]);
  
    useEffect(() => {
      let interval = null;
      if (isRunning) {
        interval = setInterval(() => {
          setTime(prevTime => prevTime + 10);
        }, 10);
      } else {
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    }, [isRunning]);
  
    const startPauseHandler = () => {
      setIsRunning(!isRunning);
    };
  
    const resetHandler = () => {
      setIsRunning(false);
      setTime(0);
      setLaps([]);
    };
  
    const lapHandler = () => {
      setLaps([...laps, time]);
    };
  
    const formatTime = (time) => {
      const getMilliseconds = `0${(time % 1000) / 10}`.slice(-2);
      const seconds = `0${Math.floor((time / 1000) % 60)}`.slice(-2);
      const minutes = `0${Math.floor((time / 60000) % 60)}`.slice(-2);
      const hours = `0${Math.floor((time / 3600000) % 24)}`.slice(-2);
      return `${hours}:${minutes}:${seconds}:${getMilliseconds}`;
    };
  
    return (
      <div className="stopwatch">
        <h1 className="stopwatch-title"> Stopwatch</h1>
        <div className="time-display">{formatTime(time)}</div>
        <div className="controls">
          <button onClick={startPauseHandler}>
            {isRunning ? 'Pause' : 'Start'}
          </button>
          <button onClick={resetHandler}>Reset</button>
          <button onClick={lapHandler} disabled={!isRunning}>Lap</button>
        </div>
        <div className="laps">
          {laps.map((lap, index) => (
            <div key={index} className="lap">
              <span>Lap {index + 1}</span>
              <span>{formatTime(lap)}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Stopwatch;