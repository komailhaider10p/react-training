import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Wizard from "./components/wizard/Wizard";
import Life from "./components/life/Life";
import Home from "./components/home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="row">
          <div className="col-2">
            <div
              className="nav flex-column nav-pills"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              <Link
                className="nav-link active"
                role="tab"
                aria-selected="true"
                data-toggle="pill"
                to="/"
              >
                Home
              </Link>
              <Link
                className="nav-link"
                role="tab"
                aria-selected="false"
                data-toggle="pill"
                to="/life"
              >
                Life
              </Link>
              <Link
                className="nav-link"
                role="tab"
                aria-selected="false"
                data-toggle="pill"
                to="/wizard"
              >
                Form Wizard
              </Link>
            </div>
          </div>
          <div className="col-10">
            <div className="tab-content" id="v-pills-tabContent">
              <Switch>
                <Route path="/life">
                  <Life />
                </Route>
                <Route path="/wizard">
                  <Wizard />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
