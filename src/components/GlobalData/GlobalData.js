import React, { useState, useEffect } from "react";
import {
  FetchAPIService,
  fetchGlobalData,
} from "../../services/FetchAPIService";
import { calculateTotal, formatNumber } from "../../services/Statistics";
import "./globaldata.scss";

function GlobalData() {
  const [totals, setTotals] = useState({
    totalCases: 0,
    totalDeaths: 0,
    totalRecovery: 0,
    totalActiveCases: 0,
  });

  useEffect(() => {
    fetchGlobalData("https://disease.sh/v3/covid-19/all").then((result) => {
      console.log(result);
      setTotals({
        totalCases: formatNumber(result.cases, 10000000),
        totalDeaths: formatNumber(result.deaths, 1000000),
        totalRecovery: formatNumber(result.recovered, 10000000),
        totalActiveCases: formatNumber(result.active, 10000000),
      });
    });
  }, []);

  return (
    <ul className="dashboard__global--list">
      <li className="list-item total">
        <span className="list-item__label">Total Cases</span>
        <span className="list-item__value"> {totals.totalCases}</span>
      </li>
      <li className="list-item deaths">
        <span className="list-item__label">Deaths</span>
        <span className="list-item__value"> {totals.totalDeaths}</span>
      </li>
      <li className="list-item recovery">
        <span className="list-item__label">Recovery</span>
        <span className="list-item__value"> {totals.totalRecovery}</span>
      </li>
      <li className="list-item active-cases">
        <span className="list-item__label">Active Cases</span>
        <span className="list-item__value"> {totals.totalActiveCases}</span>
      </li>
    </ul>
  );
}

export default GlobalData;
