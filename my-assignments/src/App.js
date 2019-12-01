import React,{Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import UserForm from './components/UserForm';
import CustomizedTabs from './components/CustomizedTabs';
import GithubListingByHook from './components/GithubListingByHook';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <nav>
              <ul>               
                <li>
                  <Link to="/UserForm">User Form</Link>
                </li>  
                <li>
                  <Link to="/CustomizedTabs">Life at 10Pearls</Link>
                </li>     
                <li>
                  <Link to="/GithubListingByHook">Github Issues</Link>
                </li>           
              </ul>
            </nav>

            <Switch>            
              <Route path="/UserForm">
                <UserForm />
              </Route> 
              <Route path="/CustomizedTabs">
              <CustomizedTabs/>
              </Route>    
              <Route path="/GithubListingByHook">
              <GithubListingByHook/>
              </Route>                      
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

