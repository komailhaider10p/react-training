import React from 'react';
import logo from './logo.svg';
import './App.css';
// import {UserForm} from './components/UserForm';
import CustomizedTabs from './components/CustomizedTabs';

function App() {
  return (
    <div className="App">
      {/* { <UserForm/>}       */}
      {<CustomizedTabs/>}
    </div>
  );
}

export default App;
