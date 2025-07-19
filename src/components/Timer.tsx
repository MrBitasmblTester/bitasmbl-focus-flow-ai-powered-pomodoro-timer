// src/components/Timer.tsx
import React, { useState, useEffect } from 'react';

const Timer: React.FC = () => {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);


  useEffect(() => {
    let interval: any;
    if (running) {
      interval = setInterval(() => {
        setSeconds(seconds + 1); // Mistake: using stale `seconds`
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [running]); 

  const handleStart = () => {
    setRunning(true);
  };

  const handlePause = () => {
    setRunning(false);
  };

  const handleReset = () => {
    setSeconds(0);
    setRunning(false);
  };

  return (
    <div>
      <h1>Timer: {seconds}s</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handlePause}>Pause</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Timer;
