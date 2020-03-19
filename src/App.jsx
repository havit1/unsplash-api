import React, { Component } from "react";
import Home from "./Components/Home/Home";
import { Navbar } from "./Components/Navbar";
import Search from "./Components/Search/Search";
import AboutPage from "./Components/AboutPage/AboutPage";
import PhotoPage from "./Components/PhotoPage/PhotoPage";
import { ThemeContext, themes } from "./Components/Context/theme-context";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
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
    let background =
      this.props.location.state && this.props.location.state.background;

    return (
      <ThemeContext.Provider value={this.state}>
        <div className={this.state.darkTheme ? "app dark" : "app"}>
          <ToastContainer />
          <Navbar />
          <Switch location={background || this.props.location}>
            <Route exact={true} path="/" component={Home} />
            <Route path="/search/:queryString" component={Search} />
            <Route path="/about" component={AboutPage} />
            <Route path="/photo/:id" component={PhotoPage} />>
            <Route path="/404" component={() => <h1>Not found</h1>} />
            <Redirect to="/404" />
          </Switch>
          {this.props.location.state ? (
            <Route path="/photo/:id" component={PhotoPage} />
          ) : null}
        </div>
      </ThemeContext.Provider>
    );
  }
}

export default withRouter(App);
