import React from "react";

export default class Step1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (this.props.currentStep !== 1) {
      return null;
    }
    return (
      <div className="form-group row">
        <label htmlFor="email" className="col-sm-2 col-form-label">
          Email address
        </label>
        <div className="col-sm-10">
          <input
            className="form-control"
            id="email"
            name="email"
            type="text"
            placeholder="Enter email"
            value={this.props.email}
            onChange={this.props.handleChange}
          />
        </div>
      </div>
    );
  }
}
