import React, { Component } from "react";
import "./App.css";
import { Navbar } from "./Components/Navbar";
import Home from "./Components/Home/Home";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Search from "./Components/Search/Search";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar onSearch={this.searchHandler}></Navbar>
          <Switch>
            <Route exact={true} path="/" component={Home} />
            <Route path="/search/:queryString" component={Search} />
            <Route path="/about" component={() => <h2>About page</h2>} />
            <Route path="/404" component={() => <h1>Not found</h1>} />
            <Redirect to="/404" />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
