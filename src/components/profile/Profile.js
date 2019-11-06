import React from 'react';

export default class Profile extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data: null,
        };
    }

    render() {
        return (
            <div>
                <h2> Profile </h2>
            </div>
        )
    }
}