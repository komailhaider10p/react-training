import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton'

class EmployementDetails extends React.Component
{
    next = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    previous = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    render()
    {
        const {value,handleChange } = this.props;

        return (
        
           <MuiThemeProvider> 
           <React.Fragment>
           <AppBar title="Enter Payment Details"/>
           <div className="secondPage"> 
           <div className="salary">
            <label>Salary
            <input type="text" name="salary" onChange={handleChange('salary')}  defaultValue={value.salary} value={this.props.salary}></input></label>
             </div>
            <div className="designation">
            <label>Email Address 
            <input type="text" name="designation" onChange={handleChange('designation')} defaultValue={value.designation} value={this.props.designation}></input></label>
            </div>
            <div className="firm">
            <label >Firm 
            <input type="text" name="firm" onChange={handleChange('firm')} defaultValue={value.firm} value={this.props.firm}></input></label>
            </div>
            </div>
            <RaisedButton
            label="Previous"
            primary ={true}
            style={styles.button}
            onClick={this.previous}
           />
           
        
           </React.Fragment>
           
            </MuiThemeProvider>
        );

    }
};

const styles = {
    button: {
        margin: 15
    }
}


export default EmployementDetails;