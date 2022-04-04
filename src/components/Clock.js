import React, { useState, useEffect } from "react";
import "./Clock.css";

const Clock = ({ isActive, time, handleTimeUpdate, handleEndOfSession }) => {
  const [timer, setTimer] = useState(null);

  const startTimer = (time) => {
    setTimer(setInterval(updateTimer, 1000));
  };

  const updateTimer = () => {
    handleTimeUpdate();
  };

  useEffect(() => {
    if (isActive) {
      startTimer(time);
      setTimeout(() => {
        setTimer((timer) => clearInterval(timer));
        handleEndOfSession();
      }, time);
    } else {
      setTimer((timer) => clearInterval(timer));
    }
  }, [isActive]);

  return (
    <div className="clock">
      <span className="timer">
        {Math.trunc(time / 1000 / 60)}:
        {(time / 1000) % 60 < 10
          ? `0${(time / 1000) % 60}`
          : (time / 1000) % 60}
      </span>
    </div>
  );
};

export default Clock;
