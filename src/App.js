import "./App.scss";
import Dashboard from "./components/dashboard/dashboard";
import Information from "./components/Information/InformationContainer/InformationContainer";
import Navigation from "./components/Navigation/Navigation";
import { Route, Routes } from "react-router-dom";
import Prevention from "./components/Prevention/PreventionContainer/PreventionContainer";
import Donation from "./components/Donation/Donation";

function App() {
  return (
    <div className="app-container">
      <Navigation />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/information" element={<Information />} />
        <Route path="/prevention" element={<Prevention />} />
        <Route path="/donation" element={<Donation />} />
      </Routes>
    </div>
  );
}

export default App;
