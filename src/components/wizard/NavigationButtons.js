import React from 'react';
import Button from 'react-bootstrap/Button'

export default class NavigationButtons extends React.Component {
    clickedPrevious = () => {
        let previousStep = this.props.currentStep - 1;
        this.props.clickHandler(previousStep);
    }
    clickedNext = () => {
        let nextStep = this.props.currentStep + 1;
        this.props.clickHandler(nextStep);
    }
    render() {
        return (
            <div>
                <Button variant="danger" onClick={this.clickedPrevious} hidden={this.props.currentStep === 1}>Previous</Button>
                <Button variant="primary" onClick={this.clickedNext} hidden={this.props.currentStep === this.props.totalSteps}>Next</Button>
                <Button variant="primary" hidden={this.props.currentStep !== this.props.totalSteps}>Submit</Button>
            </div>
        )
    }
}
