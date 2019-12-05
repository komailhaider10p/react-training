import React from 'react';
import Row from './Row';

export default class PeopleGrid extends React.Component {
    createRows = () => {
        const dataRowsCount = this.props.data ? this.props.data.length : 0;
        let rows = [];
        for (var i = 0; i < dataRowsCount; i++) {
            rows.push(
                <Row key={i} data={this.props.data[i]}/>
            )
        }
        return rows;
    }
    render() {
        return (
            <div>
                {this.createRows()}
            </div>
        )
    }
}
