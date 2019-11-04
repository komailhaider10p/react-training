import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton'

class ContactInformation extends React.Component
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
           <div className="phone">
             <label>Phone Number 
             <input type="text" name="phone" onChange={handleChange('phone')}  defaultValue={value.phone} value={this.props.phone}></input></label>
             </div>
            <div className="email">
            <label >Email Address 
            <input type="text" name="email" onChange={handleChange('email')}  defaultValue={value.email} value={this.props.email}></input></label>
            </div>
            </div>
            <RaisedButton
            label="Previous"
            primary ={true}
            style={styles.button}
            onClick={this.previous}
           />
            <RaisedButton
            label="Next"
            primary ={true}
            style={styles.button}
            onClick={this.next}
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


export default ContactInformation;