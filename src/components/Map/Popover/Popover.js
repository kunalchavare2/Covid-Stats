import React from "react";
import "./Popover.scss";
import { Popup } from "react-leaflet";
import { formatNumber } from "../../../services/Statistics";

/**
 * It will create a Popover component with the specified sub-components.
 */
function Popover({ flagSrc, country, deathsCases, activeCases, totalCases }) {
  return (
    <Popup>
      <div className="popup">
        <div className="popup__header">
          <div className="popup__header--flag">
            <img src={flagSrc} alt={country} />
          </div>
          <h3 className="popup__header--name">{country}</h3>
        </div>
        <ul className="popup__list">
          <li className="popup__item">
            <span className="popup__item--value death-case">{formatNumber(deathsCases,10000)}</span>
            <span className="popup__item--label">Deaths</span>
          </li>
          <li className="popup__item">
            <span className="popup__item--value active-case">{formatNumber(activeCases,10000)}</span>
            <span className="popup__item--label">Active</span>
          </li>
          <li className="popup__item">
            <span className="popup__item--value total-case">{formatNumber(totalCases,10000)}</span>
            <span className="popup__item--label">Total</span>
          </li>
        </ul>
      </div>
    </Popup>
  );
}

export default Popover;
