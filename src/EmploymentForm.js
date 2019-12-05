import React from 'react';

export default class EmploymentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            company: "",
            designation: "",
            empCode: null,
        };
    }
    myChangeHandler = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }
    render() {
        return (
            <div hidden={this.props.hidden}>
                <h5>Employment Form</h5>
                <label>Company:</label>
                <input type="text" name="company" onInput={this.myChangeHandler}></input>
                <br></br>
                <label>Designation:</label>
                <input type="text" name="designation" onInput={this.myChangeHandler}></input>
                <br></br>
                <label>Employee Code:</label>
                <input type="number" name="empCode" onInput={this.myChangeHandler}></input>
            </div>
        )
    }

}
