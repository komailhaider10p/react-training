import React from 'react'
import Tabs from './Tabs/Tabs'
import Person from './Person/Person'
import myData from '../employees.json';
import uniqBy from 'lodash/uniqueId'

class EmployeeInfo extends React.Component {

    categories = [...new Set(myData.data.map(item => item.category))];

    render() {

        return <Tabs showButtons={false}>

            {
                this.categories.map((category, index) => {
                   return <div key={index} tabName={category}>
                        {
                            myData.data.map((item, index) => {
                                return item.category == category ? <Person 
                                image={item.picture} 
                                key={index}
                                name={item.name} 
                                designation='Software Engineer' /> : ''
                              })
                        }
                    </div>
                })
            }
           
        </Tabs>

    }
}

export default EmployeeInfo;