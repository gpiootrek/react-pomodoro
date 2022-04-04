import React from "react";
import "./SessionsList.css";

const SessionsList = ({ sessions }) => {
  return (
    <div className="container">
      <h2 className="sessions-info">Click on session to see details</h2>
      <ul className="session-list">
        {sessions?.map((session) => (
          <li key={session.index} className="session-list__item">
            <button className="session-list__btn">Session #{session.index + 1} | 25 minutes</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SessionsList;
