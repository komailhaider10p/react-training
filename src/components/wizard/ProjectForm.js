import React from 'react';

export default class ProjectForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projectName: "",
            role: "",
            teamSize: null,
        };
    }
    myChangeHandler = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }
    render() {
        return (
            <div hidden={this.props.hidden}>
                <h5>Project Form</h5>
                <label>Project Name:</label>
                <input type="text" name="projectName" onInput={this.myChangeHandler}></input>
                <br></br>
                <label>Role:</label>
                <input type="text" name="role" onInput={this.myChangeHandler}></input>
                <br></br>
                <label>Team Size:</label>
                <input type="number" name="teamSize" onInput={this.myChangeHandler}></input>
            </div>
        )
    }

}
