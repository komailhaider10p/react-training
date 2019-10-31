import React from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import StepButton from './StepButton';
import PersonForm from './PersonForm';
import EmploymentForm from './EmploymentForm';
import ProjectForm from './ProjectForm';
import NavigationButtons from './NavigationButtons';

export default class Wizard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 1,
            totalSteps: 3,
        };
    }
    createSteps = () => {
        let steps = [];
        for (var i = 1; i < this.state.totalSteps + 1; i++) {
            steps.push(
                <StepButton key={i} value={i} disabled={i !== this.state.step}/>
            )
        }
        return steps;
    }
    Form = () => {
        return <div>
            <PersonForm hidden={this.state.step !== 1}></PersonForm>
            <EmploymentForm hidden={this.state.step !== 2}></EmploymentForm>
            <ProjectForm hidden={this.state.step !== 3}></ProjectForm>
        </div>
    }
    render() {
        return (
            <div>
                <ButtonGroup color="primary" aria-label="outlined primary button group">
                    {this.createSteps()}
                </ButtonGroup>
                {this.Form()}
                <NavigationButtons totalSteps={this.state.totalSteps} clickHandler={currentStep => {
                    this.setState({ step: currentStep });
                  }}></NavigationButtons>
            </div>
        )
    }
}
