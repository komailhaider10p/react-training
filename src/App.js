import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Wizard from './components/wizard/Wizard';
import Life from './components/life/Life';
import LifeHoc from './components/lifeHoc/LifeHoc';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Form Wizard</Link>
                </li>
                <li>
                  <Link to="/life">Life at 10Pearls</Link>
                </li>
                <li>
                  <Link to="/life-hoc">Life at 10P with HOC</Link>
                </li>
              </ul>
            </nav>

            <Switch>
              <Route path="/life-hoc">
                <LifeHoc />
              </Route> 
              <Route path="/life">
                <Life />
              </Route>            
              <Route path="/">
                <Wizard />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
