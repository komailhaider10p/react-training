import React from 'react'
import { Route, Link,Switch ,BrowserRouter as Router } from 'react-router-dom'

import Anniversary from './Components/TenPearlsNewJoiningComponents/Anniversary'
import NewJoining from './Components/TenPearlsNewJoiningComponents/NewJoining'
import Birthday from './Components/TenPearlsNewJoiningComponents/Birthday'
import MainForm from './Components/MainForm'

class App extends React.Component {
    render() {
      return (
      <Router>
          <div>
            
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav mr-auto">
              <li><Link to={'/anniversary'} className="nav-link"> Anniversary </Link></li>
              <li><Link to={'/newjoining'} className="nav-link">NewJoining</Link></li>
              <li><Link to={'/birthday'} className="nav-link">Birthday</Link></li>
              <li><Link to={'/mainform'} className="nav-link">MainForm</Link></li>
            </ul>
            </nav>
            <hr />
            <Switch>
                <Route exact path='/anniversary' component={Anniversary} />
                <Route path='/newjoining' component={NewJoining} />
                <Route path='/birthday' component={Birthday} />
                <Route path='/mainform' component={MainForm} />
            </Switch>
          </div>
        </Router>
      );
    }
  }

  
export default App;