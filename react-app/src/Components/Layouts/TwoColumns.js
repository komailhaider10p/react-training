import React, { Component } from 'react'
import Navigation from '../NavMenu/NavMenu';

class TwoColumns extends Component {
    render() {
        return (
            <div className="row">
                <h1 className='heading'>React</h1>
                <br/>
                <div className="column column-one">
                    <Navigation />
                </div>
                <div className="column column-two">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default TwoColumns;