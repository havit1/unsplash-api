import React, { Component } from "react";
import Home from "./Components/Home/Home";
import { Navbar } from "./Components/Navbar";
import Search from "./Components/Search/Search";
import { ThemeContext, themes } from "./Components/Context/theme-context";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.scss";
import "react-toastify/dist/ReactToastify.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.toggleTheme = () => {
      this.setState(state => ({
        darkTheme: state.darkTheme ? false : true
      }));
    };

    this.state = {
      darkTheme: themes.dark,
      toggleTheme: this.toggleTheme
    };
  }

  render() {
    return (
      <ThemeContext.Provider value={this.state}>
        <div className={this.state.darkTheme ? "app dark" : "app"}>
          <ToastContainer />
          <Router>
            <Navbar />
            <Switch>
              <Route exact={true} path="/" component={Home} />
              <Route path="/search/:queryString" component={Search} />
              <Route path="/about" component={() => <h2>About page</h2>} />
              <Route path="/404" component={() => <h1>Not found</h1>} />
              <Redirect to="/404" />
            </Switch>
          </Router>
        </div>
      </ThemeContext.Provider>
    );
  }
}

export default App;
