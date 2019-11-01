import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import PeopleGrid from './PeopleGrid';

export default class Life extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
        };
    }
    loadData = (key) => {
        const url = `https://randomuser.me/api/?results=5&gender=male&seed=${key}`;
        fetch(url)
            .then(response => response.json())
            .then(data => this.setState({ data: data.results }));
    }
    render() {
        return (
            <div>
                <Tabs
                id="the-tabs"
                defaultActiveKey="newJoinings"
                mountOnEnter={this.state.data == null ? this.loadData("newJoinings") : false}
                onSelect={k => this.loadData(k)}>
                    <Tab eventKey="newJoinings" title="New Joinings">
                        <PeopleGrid data={this.state.data}></PeopleGrid>
                    </Tab>
                    <Tab eventKey="birthday" title="Birthday">
                        <PeopleGrid data={this.state.data}></PeopleGrid>
                    </Tab>
                    <Tab eventKey="anniversary" title="Anniversary">
                        <PeopleGrid data={this.state.data}></PeopleGrid>                    
                    </Tab>
                </Tabs>
            </div>
            
        )
    }
}
