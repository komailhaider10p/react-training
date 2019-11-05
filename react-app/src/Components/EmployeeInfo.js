import React from 'react'
import Tabs from './Tabs/Tabs'
import Person from './Person/Person'
import EmployeeData from '../employees.json';

class EmployeeInfo extends React.Component {

    categories = [...new Set(EmployeeData.data.map(item => item.category))];

    render() {

        return <Tabs showButtons={false}>

            {
                this.categories.map((category, index) => {
                   return <div key={index} tabName={category}>
                        {
                            EmployeeData.data.map((item, index) => {
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