import "./InformationContainer.scss";
import About from "../About/About";
import Symptoms from "../Symptoms/Symptoms";
import SymptomsTable from "../SymptomsTable/SymptomsTable";
import { useContext } from "react";
import { ThemeContext } from "../../ThemeProvider/ThemeProvider";

/**
 * It will create a new Information component with the specified sub-components.
 * It will show the information about the Covid virus.
 */
function Information() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className={`information ${darkMode ? "dark" : ""}`}>
      <About theme={darkMode} />
      <Symptoms theme={darkMode} />
      <SymptomsTable theme={darkMode} />
    </div>
  );
}

export default Information;
