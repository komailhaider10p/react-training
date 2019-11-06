import React from 'react';

export default class Life extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data: null,
        };
    }

    render() {
        return (
            <div>
                <h2> Life </h2>
            </div>
        )
    }
}