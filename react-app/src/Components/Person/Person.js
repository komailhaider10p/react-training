import React from 'react'

class Person extends React.Component {

    render() {
        return (
            <div className='employeeCard'>
                <img width='50' height='50' src={this.props.image} alt={this.props.name} />
                <p>{this.props.name}</p>
                <p>{this.props.designation}</p>
            </div>
        )
    }
}

export default Person;