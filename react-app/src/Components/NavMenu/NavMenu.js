import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Navigation extends Component {

    render() {
        return (
            <div className='navbar'>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/wizard">Form Wizard</Link></li>
                    <li><Link to="/tabs">Tabs</Link></li>
                </ul>
            </div>
        );
    }
}

export default Navigation;

