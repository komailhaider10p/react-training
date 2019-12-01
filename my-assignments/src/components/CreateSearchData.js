import React from 'react';

export default class CreateSearchData extends React.Component {
    render () {
        const textStyle = {
            textAlign: "left",
            verticalAlign: "top",
            paddingLeft: "5px",
        }
        const pStyle = {
            marginBottom: "0rem",
            color:"blue"
        }
        const sStyle = {
            marginBottom: "0rem",
            color:"red"
        }        
        return (           
              <div style={textStyle}>
                <h5 style={{ textDecoration: "Underline" }}>
                  Title:</h5> <p style={pStyle}>{this.props.data.title}</p>
                <br/>                
               <h5>Status: </h5> <p style={sStyle}>{this.props.data.state}</p>               
              </div>                
        )
    }
}
