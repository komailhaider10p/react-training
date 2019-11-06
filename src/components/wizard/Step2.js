import React from "react";

export default class Step2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (this.props.currentStep !== 2) {
      return null;
    }
    return (
      <div className="form-group row">
        <label htmlFor="username" className="col-sm-2 col-form-label">
          User Name
        </label>
        <div className="col-sm-10">
          <input
            className="form-control"
            id="username"
            name="username"
            type="text"
            placeholder="Enter username"
            value={this.props.username}
            onChange={this.props.handleChange}
          />
        </div>
      </div>
    );
  }
}
