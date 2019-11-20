import React from 'react';
import './App.css';
import { Route } from 'react-router';
import Layout from './Components/Layouts/TwoColumns';
import Home from './Components/Home';
import FormWizard from './Components/FormWizard';
import EmployeeInfo from './Components/EmployeeInfo'


import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Dashboard from './Dashboard';




function App() {
  return (
   
  
  // <Container maxWidth="sm">
  //     <Box my={4}>
  //     <Layout>
  //     <Route exact path='/' component={Home} />
  //     <Route path='/wizard' component={FormWizard} />
  //     <Route path='/tabs' component={EmployeeInfo} />
  //   </Layout>
        
  //     </Box>
  //   </Container>
  <Dashboard></Dashboard>

  );
}

export default App;
