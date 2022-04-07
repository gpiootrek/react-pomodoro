import React from "react";
import reactDom from "react-dom";
import "./Notification.css";

const Notification = ({ isPushed, title, content }) => {
  return (
    isPushed &&
    reactDom.createPortal(
      <div className="notification">
        <h3 className="notification__title">{title}</h3>
        <p className="notification__content">{content}</p>
      </div>,
      document.getElementById("modals")
    )
  );
};

export default Notification;
