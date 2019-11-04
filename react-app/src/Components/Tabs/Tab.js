import React, { Component } from 'react';

class Tab extends Component {
  
  onClick = () => {
    this.props.onClick(this.props.currentIndex);
  }

  render() {
    
    let className = 'tab-list-item';
    if (this.props.activeTabIndex === this.props.currentIndex) {
      className += ' tab-list-active';
    }

    return (
      <li className={className} onClick={this.onClick}>
        {this.props.tabName}
      </li>
    );
  }
}

export default Tab;