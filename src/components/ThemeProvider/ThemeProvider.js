import React, { createContext, useReducer } from "react";

export const ThemeContext = createContext();

const initialState = { darkMode: false, theme: "light" };

const themeReducer = (state, action) => {
  switch (action.type) {
    case "LIGHTMODE":
      return { darkMode: false, theme: "light" };
    case "DARKMODE":
      return { darkMode: true, theme: "dark" };
    case "CUSTOMMODE":
      return { darkMode: false, theme: "custom" };
    default:
      return state;
  }
};

function ThemeProvider(props) {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  return (
    <ThemeContext.Provider value={{ state: state, dispatch: dispatch }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
