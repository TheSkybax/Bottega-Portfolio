import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Test from "./test";
import NavigationComp from "./navigation/nav-links";
import Home from "./home";
import About from "./about";
import Contact from "./contact";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <NavigationComp />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/test" component={Test} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </Router>
      </div>
    );
  }
}
