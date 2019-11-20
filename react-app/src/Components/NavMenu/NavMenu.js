import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import DashboardIcon from '@material-ui/icons/Dashboard';

import { Link } from 'react-router-dom';

export const mainListItems = (
  <div>
      
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <Link exact='true' to="/">Home</Link>
    </ListItem>

    <ListItem button>
      <ListItemIcon>
      <DashboardIcon />
      </ListItemIcon>
      <Link to="wizard">FormWizard</Link>
    </ListItem>

    <ListItem button>
      <ListItemIcon>
      <DashboardIcon />
      </ListItemIcon>
      <Link to="tabs">EmployeeInfo</Link>
    </ListItem>

    <ListItem button>
      <ListItemIcon>
      <DashboardIcon />
      </ListItemIcon>
      <Link to="github-issues">Github Issues</Link>
    </ListItem>
    
  </div>
);
