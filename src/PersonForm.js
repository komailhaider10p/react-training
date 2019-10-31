import React from 'react';

export default class PersonForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            age: null,
        };
    }
    myChangeHandler = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }
    render() {
        return (
            <div hidden={this.props.hidden}>
                <h5>Person Form</h5>
                <label>Name:</label>
                <input type="text" name="name" onInput={this.myChangeHandler}></input>
                <br></br>
                <label>Age:</label>
                <input type="number" name="age" onInput={this.myChangeHandler}></input>
            </div>
        )
    }

}
