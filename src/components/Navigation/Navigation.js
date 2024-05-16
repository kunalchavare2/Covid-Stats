import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navigation.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/img/covid-logo.png";
import dashboardLogo from "../../assets/img/dashboard.png";
import infoLogo from "../../assets/img/information.png";
import preventionLogo from "../../assets/img/prevention.png";
import donateLogo from "../../assets/img/donate.png";
import dashboardLogoWh from "../../assets/img/dashboard-white.png";
import infoLogoWh from "../../assets/img/information-white.png";
import preventionLogoWh from "../../assets/img/prevention-white.png";
import donateLogoWh from "../../assets/img/donate-white.png";
import Settings from "./../Settings/Settings";

/**
 * It will create a new Navigation component with the specified sub-components.
 */
function Navigation() {
  // to keep track of the current page
  const [page, setPage] = useState("dashboard");
  // to keep track of the menu state
  const [menu, showMenu] = useState(false);
  // to navigate between pages
  const navigate = useNavigate();

  /**
   * Function to navigate between pages
   * @param {Event} ev Event object
   */
  function setActive(ev) {
    ev.preventDefault();

    // To get the navigation list active component
    const navActive = document.querySelector(".header__navlist .active");

    let linkItem = null;

    // set initial route
    let route = "/";

    /*
      It will check if the clicked item is "header__navitem" class
      If yes then it will event target to linkItem else it will
      go to parent node check for same thing if it is not found that class
      it go two level upword
     */
    if (ev.target.classList.contains("header__navitem")) {
      linkItem = ev.target;
    } else {
      if (ev.target.parentNode.classList.contains("header__navitem")) {
        linkItem = ev.target.parentNode;
      } else {
        linkItem = ev.target.parentNode.parentNode;
      }
    }

    // hide the previous active link
    navActive.classList.toggle("active");

    // show current active link
    linkItem.classList.toggle("active");

    // Change the route to the new route
    route =
      linkItem.dataset.item === "dashboard" ? "/" : `/${linkItem.dataset.item}`;
    navigate(route, { replace: true });

    // update page state
    setPage(linkItem.dataset.item);

    // show menu
    showMenu(!menu);
  }

  /**
   * Function to toggle the menu state
   */
  function openMenu() {
    showMenu(!menu);
  }

  return (
    <header className="header">
      <Link to="/" className="header__logo">
        <img src={logo} alt="COVID-19 Map Statistics" />
        <span>Covid Tracker</span>
      </Link>
      <div
        className={
          menu ? "header__content-wrapper open" : "header__content-wrapper"
        }
      >
        <nav>
          <ul className="header__navlist">
            <li>
              <Link
                to="/"
                className="header__navitem active"
                onClick={setActive}
                data-item="dashboard"
              >
                <div className="header__navitem--icon">
                  <img
                    src={page === "dashboard" ? dashboardLogo : dashboardLogoWh}
                    alt="dashboard icon"
                  />
                  <img
                    className="mobile-img"
                    src={dashboardLogo}
                    alt="dashboard icon"
                  />
                </div>
                <span className="header__navitem--label">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                to="/information"
                className="header__navitem"
                onClick={setActive}
                data-item="information"
              >
                <div className="header__navitem--icon" aria-hidden="true">
                  <img
                    src={page === "information" ? infoLogo : infoLogoWh}
                    alt="information logo"
                  />
                  <img
                    className="mobile-img"
                    src={infoLogo}
                    alt="information logo"
                  />
                </div>
                <span className="header__navitem--label">Information</span>
              </Link>
            </li>
            <li>
              <Link
                to="/prevention"
                className="header__navitem"
                onClick={setActive}
                data-item="prevention"
              >
                <div className="header__navitem--icon" aria-hidden="true">
                  <img
                    src={
                      page === "prevention" ? preventionLogo : preventionLogoWh
                    }
                    alt="prevention logo"
                  />
                  <img
                    className="mobile-img"
                    src={preventionLogo}
                    alt="prevention logo"
                  />
                </div>
                <span className="header__navitem--label">Prevention</span>
              </Link>
            </li>
            <li>
              <Link
                to="/donation"
                className="header__navitem"
                onClick={setActive}
                data-item="donation"
              >
                <div className="header__navitem--icon" aria-hidden="true">
                  <img
                    src={page === "donation" ? donateLogo : donateLogoWh}
                    alt="Donate logo"
                  />
                  <img
                    className="mobile-img"
                    src={donateLogo}
                    alt="Donate logo"
                  />
                </div>
                <span className="header__navitem--label">Donation</span>
              </Link>
            </li>
          </ul>
        </nav>

        <div className="header__setting">
          <Settings btnClass="header__setting--logo" />
        </div>
        <button className="header__cancel" onClick={openMenu}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
      <button className="header__menu" onClick={openMenu}>
        <FontAwesomeIcon icon={faBars} />
      </button>
    </header>
  );
}

export default Navigation;
