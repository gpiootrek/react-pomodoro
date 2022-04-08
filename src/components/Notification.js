import React from "react";
import reactDom from "react-dom";
import "./Notification.css";
import { FaExclamation } from "react-icons/fa";

const Notification = ({ isPushed, title, content }) => {
  return (
    isPushed &&
    reactDom.createPortal(
      <div className="notification">
        <FaExclamation className="notification__icon"/>
        <div className="notification__test-wrapper">
          <h3 className="notification__title">{title}</h3>
          <p className="notification__content">{content}</p>
        </div>
      </div>,
      document.getElementById("modals")
    )
  );
};

export default Notification;
