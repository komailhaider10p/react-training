import React from 'react';

export default class Row extends React.Component {
    render () {
        const rowStyle = {
            marginTop: "5px",
            borderBottomStyle: "dotted",
        }
        const imgStyle = {
            borderRadius: "50%",
        };
        const textStyle = {
            display: "inline-block",
            verticalAlign: "top",
        }
        const pStyle = {
            marginBottom: "0rem"
        }
        return (
            <div style={rowStyle}>
                <img
                style={imgStyle}
                alt=""
                src={this.props.data.picture.thumbnail}/>
                <div style={textStyle}>
                    <h5>{this.props.data.name.first}</h5>
                    <p style={pStyle}>{this.props.data.location.country}</p>
                </div>
            </div>
        )
    }
}
