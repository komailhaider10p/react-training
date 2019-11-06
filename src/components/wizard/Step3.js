import React from "react";

export default class Step3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (this.props.currentStep !== 3) {
      return null;
    }

    const successButtonstyle = {
      width: "620px",
      margin: "0px 0px 0px 125px"
    };

    return (
      <React.Fragment>
        <div className="form-group row">
          <label htmlFor="password" className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-10">
            <input
              className="form-control"
              id="password"
              name="password"
              type="password"
              placeholder="Enter password"
              value={this.props.username}
              onChange={this.props.handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 pull-left">
            <button
              className="btn btn-success"
              style={successButtonstyle}
              type="submit"
            >
              Sign up
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
