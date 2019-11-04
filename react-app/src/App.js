import React from 'react';
import './App.css';
import { Route } from 'react-router';
import Layout from './Components/Layouts/TwoColumns';
import Home from './Components/Home';
import FormWizard from './Components/FormWizard';
import EmployeeInfo from './Components/EmployeeInfo'

function App() {
  return (
    <Layout>
      <Route exact path='/' component={Home} />
      <Route path='/wizard' component={FormWizard} />
      <Route path='/tabs' component={EmployeeInfo} />
    </Layout>
  );
}

export default App;
