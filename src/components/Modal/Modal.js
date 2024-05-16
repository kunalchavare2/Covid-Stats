import React, { useContext } from "react";
import ReactDOM from "react-dom";
import "./Modal.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { ThemeContext } from "../ThemeProvider/ThemeProvider";

function Modal({ isOpen, onClose, children }) {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <div className="backdrop">
      <div className={`modal slide-bottom ${darkMode ? "dark" : ""}`}>
        <button className="modal__cancel" onClick={onClose}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
        {children}
      </div>
    </div>,
    document.querySelector("#modal-root")
  );
}

export default Modal;
