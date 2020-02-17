import React from "react";

export const themes = {
  dark: false,
  toggleTheme: () => {}
};

export const ThemeContext = React.createContext(themes);
