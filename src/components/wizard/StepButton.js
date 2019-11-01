import React from 'react';
import Button from 'react-bootstrap/Button'

export default class StepButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
            disabled: true,
        };
    }
    render() {
        return (
            <Button variant="link" disabled={this.props.disabled}>
                Step {this.props.value}
            </Button>
        )
    }

}
