import React from "react";
import '../../App.css';
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  render() {
    return (
      <div className="container">
        <div className="row profile">
          <div className="col-md-3">
            <div className="profile-sidebar">
              <div className="profile-userpic">
                <img
                  src="http://keenthemes.com/preview/metronic/theme/assets/admin/pages/media/profile/profile_user.jpg"
                  className="img-responsive"
                  alt=""
                />
              </div>
              <div className="profile-usertitle">
                <div className="profile-usertitle-name">Marcus Doe</div>
                <div className="profile-usertitle-job">Developer</div>
              </div>
              <div className="profile-userbuttons">
                <button type="button" className="btn btn-success btn-sm">
                  Follow
                </button>
                <button type="button" className="btn btn-danger btn-sm">
                  Message
                </button>
              </div>
              <div className="profile-usermenu">
                <ul className="nav">
                  <li className="active">
                    <a href="#">
                      <i className="glyphicon glyphicon-home"></i>
                      Overview{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="glyphicon glyphicon-user"></i>
                      Account Settings{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i className="glyphicon glyphicon-ok"></i>
                      Tasks{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="glyphicon glyphicon-flag"></i>
                      Help{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <div className="profile-content">
              <p></p>
              <ul>
                <li>Three-year background in diverse facets of .NET development, encompassing analysis, design, development, and execution of business applications.</li>
                <li>In-depth knowledge of various platforms, software systems, and servers.</li>
                <li>Extensive programming experience using ASP.NET 2.0, VB.NET, HTML, and XML.</li>
                <li>Excellent communication skills with strong background working directly with coworkers and clientele to identify business objectives and establish requirements.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
