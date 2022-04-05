import React, { useState, useEffect, Fragment } from "react";
import Clock from "./components/Clock";
import Menu from "./components/Menu";
import NotesEditor from "./components/NotesEditor";
import SessionsList from "./components/SessionsList";
import "./index.css";

const BASIC_TIME = 0.1 * 60 * 1000;

const App = () => {
  const [isActive, setIsActive] = useState(false);
  const [isEditingTime, setIsEditingTime] = useState(false);
  const [time, setTime] = useState(BASIC_TIME);
  const [sessions, setSessions] = useState([]);
  const [currentNotes, setCurrentNotes] = useState("");
  const [index, setIndex] = useState(0);
  const [isEditorOpen, setIsEditorOpen] = useState(false);

  const handleActiveState = () => {
    setIsActive((prev) => !prev);
  };

  const handleRestart = () => {
    setIsActive(false);
    setTime(BASIC_TIME);
  };

  const handleNotesEdit = (text) => {
    setCurrentNotes(text);
  };

  const handleEndOfSession = () => {
    setSessions((prev) => [
      ...prev,
      {
        index: index,
        notes: currentNotes,
      },
    ]);

    setIndex((i) => i + 1);

    setIsActive(false);
    setTime(BASIC_TIME);
  };

  // given time in ms
  const handleTimeUpdate = () => {
    setTime((prev) => prev - 1000);
  };

  const handleEditorState = () => {
    setIsEditorOpen((prev) => !prev);
  };

  const handleEditingTime = () => {
    setIsEditingTime((prev) => !prev);
  };

  return (
    <Fragment>
      <NotesEditor
        notesContent={currentNotes}
        isOpen={isEditorOpen}
        handleEditorState={handleEditorState}
        handleNotesEdit={handleNotesEdit}
      />
      <div className="container">
        <Clock
          isActive={isActive}
          isEditingTime={isEditingTime}
          time={time}
          handleTimeUpdate={handleTimeUpdate}
          handleEndOfSession={handleEndOfSession}
          handleEditingTime={handleEditingTime}
        />
        <Menu
          isActive={isActive}
          handleActiveState={handleActiveState}
          handleRestart={handleRestart}
          handleEditorState={handleEditorState}
        />
        <SessionsList sessions={sessions} />
      </div>
    </Fragment>
  );
};

export default App;
