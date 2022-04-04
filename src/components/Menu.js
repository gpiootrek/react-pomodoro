import React from "react";
import "./Menu.css";
import { FaPlay, FaStickyNote, FaTrash, FaPause } from "react-icons/fa";

const Menu = ({
  isActive,
  handleActiveState,
  handleRestart,
  handleEditorState,
}) => {
  const handleTimer = () => {
    handleActiveState();
  };

  const handleTimerRestart = () => {
    handleRestart();
  };

  return (
    <div className="menu">
      <button className="menu__btn" onClick={handleTimer}>
        {isActive ? <FaPause /> : <FaPlay />}
      </button>
      <button className="menu__btn" onClick={handleEditorState}>
        <FaStickyNote />
      </button>
      <button className="menu__btn" onClick={handleTimerRestart}>
        <FaTrash />
      </button>
    </div>
  );
};

export default Menu;
