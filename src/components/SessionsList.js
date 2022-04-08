import React, { useState } from "react";
import "./SessionsList.css";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import Session from "./Session";

const SessionsList = ({ sessions }) => {

  return (
    <div className="container">
      <h2 className="sessions-info">Click on session to see details</h2>
      <ul className="session-list">
        {sessions?.map((session) => (
          <li key={session.index} className="session-list__item">
            <Session
              index={session.index}
              minutes={session.minutes}
              seconds={session.seconds}
              notes={session.notes}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SessionsList;
