import React, { Component } from "react";
import "./Navbar.scss";
import { SearchForm } from "../SerachForm";
import { NavLink } from "react-router-dom";

export class Navbar extends Component {
  state = {};
  render() {
    const { onSearch } = this.props;

    return (
      <nav className="nav">
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
        </div>
      </nav>
    );
  }
}
