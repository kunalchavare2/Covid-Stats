import React, { useContext } from "react";
import Wrapper from "../../helpers/wrapper";
import "./dashboard.scss";
import CustomMap from "../Map/CustomMap/CustomMap";
import MapContainer from "../Map/MapContainer/MapContainer";
import GlobalData from "../GlobalData/GlobalData";
import CountriesData from "../Countries/CountriesData/CountriesData";
import StatsContainer from "./../Stats/StatsContainer";
import { ThemeContext } from "../ThemeProvider/ThemeProvider";

/**
 * It will create a new dashboard component with the specified sub-components.
 */
function Dashboard() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <Wrapper>
      <div className={`dashboard ${darkMode ? "dark" : ""}`}>
        <div className="dashboard__wrapper">
          <div className="dashboard__global dashboard__card">
            <GlobalData />
          </div>
          <div className="dashboard__map dashboard__card">
            <CustomMap />
          </div>
          <div className="dashboard__countrymap dashboard__card">
            <MapContainer />
          </div>
          <div className="dashboard__countrylist dashboard__card">
            <CountriesData />
          </div>
          <div className="dashboard__stats stats-container dashboard__card">
            <StatsContainer theme={darkMode} />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Dashboard;

