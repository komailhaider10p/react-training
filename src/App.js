import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Wizard from './Wizard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Wizard></Wizard>
      </div>
    );
  }
}

export default App;
