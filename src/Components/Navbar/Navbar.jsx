import React, { Component } from "react";
import { SearchForm } from "../SerachForm";
import { NavLink } from "react-router-dom";
import ThemeButton from "../Common/ThemeButton";
import { ThemeContext } from "../Context/theme-context";
import "./Navbar.scss";

export class Navbar extends Component {
  state = {};

  static contextType = ThemeContext;

  getClass = () => {
    return this.context.darkTheme ? "nav dark" : "nav";
  };

  render() {
    const { onSearch } = this.props;

    return (
      <nav className={`${this.getClass()}`}>
        <div className="nav__content">
          <div className="nav__search-form">
            <SearchForm onSearch={onSearch} />
          </div>
          <ul className="nav__links">
            <li className="nav__links-link">
              <NavLink exact to="/">
                Home
              </NavLink>
            </li>
            <li className="nav__links-link">
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
          <ThemeButton />
        </div>
      </nav>
    );
  }
}
