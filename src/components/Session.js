import React, { useState } from "react";
import "./SessionsList.css";

const Session = ({ index, minutes, seconds, notes }) => {
  const [isExtended, setIsExtended] = useState(false);
  const handleSessionDetails = () => {
    setIsExtended((prev) => !prev);
  };

  return (
    <button className="session-list__btn" onClick={handleSessionDetails}>
      Session #{index + 1} |{" "}
      {minutes < 10 ? `0${Math.round(minutes)}` : minutes}:
      {seconds < 10 ? `0${Math.round(seconds)}` : seconds}
      {isExtended && <span className="session-details">{notes}</span>}
    </button>
  );
};

export default Session;
