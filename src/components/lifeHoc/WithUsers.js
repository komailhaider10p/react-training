import React from 'react';
import axios from 'axios'


const withUsers = (WrappedComponent) => {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
              data: null
            };
          }
        componentDidMount() {
            axios.get("https://api.randomuser.me/?results=5&gender=male&seed=testing")
            .then(response => this.setState({ data: response.data.results }));
        }
        render() {
            return <WrappedComponent data={this.state.data} {...this.props}></WrappedComponent>
        }
    }
}
export default withUsers;
