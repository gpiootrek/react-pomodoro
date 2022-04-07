import React, { useState } from "react";
import "./SessionsList.css";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const SessionsList = ({ sessions }) => {
  const [isExtended, setIsExtended] = useState(false);
  // TODO extending session details

  return (
    <div className="container">
      <h2 className="sessions-info">Click on session to see details</h2>
      <ul className="session-list">
        {sessions?.map((session) => (
          <li key={session.index} className="session-list__item">
            <button
              className="session-list__btn"
              // onClick</li>={() => handleSessionDetails(session.index)}
            >
              Session #{session.index + 1} |{" "}
              {session.minutes < 10
                ? `0${Math.round(session.minutes)}`
                : session.minutes}
              :
              {session.seconds < 10
                ? `0${Math.round(session.seconds)}`
                : session.seconds}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SessionsList;
