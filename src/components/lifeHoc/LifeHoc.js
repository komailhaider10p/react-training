import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import PeopleGrid from './../life/PeopleGrid';
import PeopleCardList from './PeopleCardList';
import withUsers from './WithUsers';

const EnhancedPeopleGridComponent = withUsers(PeopleGrid);
const EnhancedPeopleCardComponent = withUsers(PeopleCardList);

export default class Life extends React.PureComponent {
    render() {
        return (
            <React.Fragment>
                <Tabs
                id="the-tabs"
                defaultActiveKey="grid">
                    <Tab eventKey="grid" title="Grid View">
                        <EnhancedPeopleGridComponent />
                    </Tab>
                    <Tab eventKey="card" title="Card View">
                        <EnhancedPeopleCardComponent />
                    </Tab>
                </Tabs>
            </React.Fragment>
            
        )
    }
}
