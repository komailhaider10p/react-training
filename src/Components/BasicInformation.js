
import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton'

class BasicInformation extends React.Component
{
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    render()
    {
        const {value, handleChange } = this.props;

        return (
        
           <MuiThemeProvider> 
           <React.Fragment>
           <AppBar title="Enter Payment Details"/>
           <div className="firstName">
             <label>First Name:
             <input type="text"  onChange={handleChange('firstName')} defaultValue={value.firstName} name="firstName" value={this.props.firstName}></input></label>
             </div>
             <div></div>
            <div className="lastName">
            <label>Last Name:
            <input type="text"  onChange={handleChange('lastName')} defaultValue={value.lastName} name="lastName" value={this.props.lastName}></input></label>
            </div>
            <RaisedButton
            label="Next"
            primary ={true}
            style={styles.button}
            onClick={this.continue}
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
export default BasicInformation;