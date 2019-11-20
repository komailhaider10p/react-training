import React, { Component } from 'react';

class Home extends Component {
  displayName = Home.name

  render() {
    return (
      <div>
        <p><b>1. Form wizard</b></p>
        <p><b>2. Life at 10Pearls (New Joining, Birthday, Anniversary) using 3 different components</b></p>
        <p><b>3. Search page for GitHub issues list </b></p>
          <ol>
            <li>Filters: State (Open, Close, All)</li>
            <li>Sort: Created, Updated (ASC/DESC)</li>
          </ol>
      </div>
    );
  }
}

export default Home;