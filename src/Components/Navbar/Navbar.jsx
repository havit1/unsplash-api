import React, { Component } from "react";
import "./Navbar.scss";
import { SearchForm } from "../SerachForm";
import { Link } from "react-router-dom";

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
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
          {/* <PageMenu /> */}
        </div>
      </nav>
    );
  }
}
