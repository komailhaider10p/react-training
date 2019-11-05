import React, { Component } from 'react'
import BasicInformation from './BasicInformation'
import ContactInformation from './ContactInformation'
import EmployementDetails from './EmployementDetails'


export class MainForm extends Component {
    state={
        step:1,
        firstName:'',
        lastName:'',
        email:'',
        phone:'',
        salary:'',
        designation:'',
        firm:'',
        isTaxFiler: ''
    }
    render() {
        const {step} = this.state;
        const {firstName, lastName, email,phone,salary,designation, firm,isTaxFiler} = this.state;
        const values = {firstName, lastName, email,phone,salary,designation, firm,isTaxFiler};
       
       switch(step){
           case 1: 
           return(
            <BasicInformation
             nextStep = {this.nextStep}
             handleChange = {this.handleChange}
             value ={values}
             />
           )
           case 2: 
           return( 
            <ContactInformation  prevStep = {this.prevStep}
            nextStep = {this.nextStep}
            handleChange = {this.handleChange}
            value ={values}
            />
           )
           case 3: 
           return( 
            <EmployementDetails  prevStep = {this.prevStep}
            nextStep = {this.nextStep}
            handleChange = {this.handleChange}
            value ={values}
            />
           )
          
       }
    }
    //proceed step
nextStep =()=>
{
    const {step} = this.state;
    this.setState({ step : step + 1});
}

//previous step
prevStep =()=>
{
    const {step} = this.state;
    this.setState({ step: step - 1});
}

 // Handle fields change
 handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };
}


export default MainForm
