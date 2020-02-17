import React from "react";
import { ThemeContext } from "../Context/theme-context";
import "./ThemeButton.scss";

class ThemeButton extends React.Component {
  static contextType = ThemeContext;

  getClass = () => {
    return this.context.darkTheme
      ? "theme-toggle-button dark"
      : "theme-toggle-button";
  };

  render() {
    let props = this.props;
    let darkTheme = this.context.darkTheme;
    let toggleTheme = this.context.toggleTheme;

    return (
      <div className="theme-switch-wrapper">
        <label className="theme-switch" htmlFor="checkbox">
          <input
            {...props}
            className={`${this.getClass()}`}
            type="checkbox"
            id="checkbox"
            checked={darkTheme}
            onChange={toggleTheme}
          ></input>
          <div className="slider round"></div>
        </label>
      </div>
    );
  }
}

export default ThemeButton;
