import React from 'react';
import Button from 'react-bootstrap/Button'

export default class NavigationButtons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 1
        };
    }
    clickedPrevious = () => {
        let previousStep = this.state.step - 1;
        this.props.clickHandler(previousStep);
        this.setState({ step: previousStep })
    }
    clickedNext = () => {
        let nextStep = this.state.step + 1;
        this.props.clickHandler(nextStep);
        this.setState({ step: nextStep })
    }
    render() {
        return (
            <div>
                <Button variant="danger" onClick={this.clickedPrevious} hidden={this.state.step === 1}>Previous</Button>
                <Button variant="primary" onClick={this.clickedNext} hidden={this.state.step === this.props.totalSteps}>Next</Button>
                <Button variant="primary" hidden={this.state.step !== this.props.totalSteps}>Submit</Button>
            </div>
        )
    }
}
