import React, { useContext, useState } from "react";
import Modal from "../Modal/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import "./Settings.scss";
import { ThemeContext } from "../ThemeProvider/ThemeProvider";
import themeIcon from "../../assets/img/theme.png";
import mapIcon from "../../assets/img/google-maps.png";
import { useEffect } from "react";

function Settings(props) {
  const [open, setOpen] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  useEffect(() => {
    let clsName = `.theme-${theme.state.theme}`;
    if (open) {
      document.querySelector(clsName).classList.add("active-theme");
    }
  }, [open]);

  function clickHandler(e) {
    if (e.target.classList.contains("modal-content__settings--item")) {
      e.target.parentNode
        .querySelector(".active-theme")
        .classList.remove("active-theme");
      e.target.classList.add("active-theme");
      console.log(e.target.dataset.theme);
      if (e.target.dataset.theme === "light") {
        theme.dispatch({ type: "LIGHTMODE" });
      } else if (e.target.dataset.theme === "dark") {
        theme.dispatch({ type: "DARKMODE" });
      } else {
        theme.dispatch({ type: "CUSTOMMODE" });
      }
    }
  }

  return (
    <div className="component" onClick={() => console.log("click")}>
      <button className={props.btnClass} onClick={() => setOpen(!open)}>
        <FontAwesomeIcon icon={faGear} />
      </button>
      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <div className={`modal-content ${darkMode ? "dark" : ""}`}>
          <h2 className="modal-content__title">Settings</h2>
          <div className="modal-content__settings">
            <div className="modal-content__settings--wrapper">
              <img src={themeIcon} alt="theme" />
              <h3 className="modal-content__settings--title">Themes</h3>
            </div>
            <ul
              className="modal-content__settings--list"
              onClick={clickHandler}
            >
              <li
                className="modal-content__settings--item theme-light"
                data-theme="light"
              ></li>
              <li
                className="modal-content__settings--item theme-dark"
                data-theme="dark"
              ></li>
              <li
                className="modal-content__settings--item theme-custom"
                data-theme="custom"
              ></li>
            </ul>
          </div>
          <div className="modal-content__settings">
            <div className="modal-content__settings--wrapper">
              <img src={mapIcon} alt="map" />
              <h3 className="modal-content__settings--title">Maps</h3>
            </div>
            <ul className="modal-content__settings--list">
              <li className="modal-content__settings--item">option 1</li>
              <li className="modal-content__settings--item">Option 2</li>
              <li className="modal-content__settings--item">Option 3</li>
            </ul>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Settings;
