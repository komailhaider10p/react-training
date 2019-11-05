import React from 'react'
import { Route, Link,Switch ,BrowserRouter as Router } from 'react-router-dom'

import Anniversary from './Anniversary'
import NewJoining from './NewJoining'
import Birthday from './Birthday'


class ParentForm extends React.Component {
    render() {
      return (
      <Router>
          <div>
            
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav mr-auto">
              <li><Link to={'/'} className="nav-link"> Anniversary </Link></li>
              <li><Link to={'/newjoining'} className="nav-link">NewJoining</Link></li>
              <li><Link to={'/birthday'} className="nav-link">Birthday</Link></li>
            </ul>
            </nav>
            <hr />
            <Switch>
                <Route exact path='/' component={Anniversary} />
                <Route path='/newjoining' component={NewJoining} />
                <Route path='/birthday' component={Birthday} />
            </Switch>
          </div>
        </Router>
      );
    }
  }

  
export default ParentForm;