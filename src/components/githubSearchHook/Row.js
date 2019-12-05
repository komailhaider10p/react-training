import React from 'react';

export default class Row extends React.Component {
    render () {
        const textStyle = {
            textAlign: "left",
            verticalAlign: "top",
            paddingLeft: "5px",
        }
        const pStyle = {
            marginBottom: "0rem"
        }
        return (
            <div style={textStyle}>
                <p style={pStyle}>
                    <span>{this.props.data.title}</span>
                    <span>({this.props.data.state})</span>
                </p>
            </div>
        )
    }
}
