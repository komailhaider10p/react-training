import React, {Component} from 'react'

class TabContent extends Component{

    render(){
        return <div style={{display: this.props.show ? 'block' : 'none' }}>{this.props.tabContent}</div>
    }
}

export default TabContent;