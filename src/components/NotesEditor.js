import React, { useRef, Fragment } from "react";
import reactDom from "react-dom";
import "./NotesEditor.css";
import { FaTimes } from "react-icons/fa";

const NotesEditor = ({
  notesContent,
  isOpen,
  handleEditorState,
  handleNotesEdit,
}) => {

  const notesRef = useRef(null);

  const handleNoteChange = () => {
    handleNotesEdit(notesRef.current.value);
  }

  return (
    isOpen &&
    reactDom.createPortal(
      <Fragment>
        <div className="overlay" onClick={handleEditorState}></div>
        <div className="editor">
          <button className="editor__close" onClick={handleEditorState}>
            <FaTimes />
          </button>
          <textarea
            name="notes"
            id="note"
            className="editor__input"
            cols="50"
            rows="15"
            ref={notesRef}
            onChange={handleNoteChange}
            value={notesContent}
          ></textarea>
        </div>
      </Fragment>,
      document.getElementById("modals")
    )
  );
};

export default NotesEditor;
