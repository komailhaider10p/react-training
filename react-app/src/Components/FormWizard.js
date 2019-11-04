import React, {Component} from 'react'
import Tabs from './Tabs/Tabs';
import FormElement from './Form/FormElement'

class FormWizard extends Component {
    render() {
       return <Tabs showButtons={true}>

            <div tabName="Step 1">
                <FormElement label='First Name' type='text' />
                <FormElement label='Last Name' type='text' />
            </div>

            <div tabName="Step 2">
                <FormElement label='Email Address' type='text' />
                <FormElement label='Address' type='textarea' />
            </div>

            <div tabName="Step 3">
                <FormElement label='Password' type='text' />
                <FormElement label='Confirm Password' type='text' />
            </div>

            <div tabName="Step 4">
                <div>
                    <span>By clicking "Accept" I agree that:</span>
                    <div className='docs-terms'>
                        <p>I have read and accepted the <a href='#'>Privacy Policy</a></p>
                    </div>
                    <label>
                        <input type='checkbox' />
                        <span> Accept </span>
                    </label>
                </div>
            </div>

        </Tabs>
    }
}

export default FormWizard;