import React, {Component} from 'react'

class FormElement extends Component{
    render(){
        return <div className='formGroup'>
            {
                this.props.label == null ? '' : <label>{this.props.label}</label>
            }
            {
                this.props.type == null ? '' 
                 : (
                     this.props.type == 'textarea' ? <textarea rows='10' cols='32'></textarea> : <input type={this.props.type}  />
                 )
            }
        </div>
    }
}

export default FormElement;