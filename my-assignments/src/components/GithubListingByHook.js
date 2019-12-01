import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CreateSearchData from './CreateSearchData';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

export default function GithubListingByHook() {
    const [issues, setIssues] = useState([], {});
    const [state, setState] = React.useState('all');    
    const textStyle = {
        textAlign: "left",
        verticalAlign: "top",
        paddingLeft: "5px",
    }    
    
    const handleChange = event => {
        setState(event.target.value);
        fetchData(event.target.value);
      };
      
    useEffect(() => {
        fetchData(state);
    }, []);

    function fetchData(issueState) {
        const url = `https://api.github.com/repos/CyC2018/GFM-Converter/issues?state=${issueState}`;

        axios.get(url)
        .then(response => setIssues(response.data));
    }

    function SearchDataRows() {
        let rows = [];
        for (var i = 0; i < issues.length; i++) {
            rows.push(                
                <CreateSearchData key={issues[i].id} data={issues[i]}/>
            )
        }
        return rows;
    }

    return (        
        <div style={textStyle}>
            <h3 style={{ textDecoration: "Underline"}}> Github Issue List</h3>                        
            <label><h5>Filter:</h5> </label>
            <Select value={state} onChange={handleChange}>
                <MenuItem value='all'> All</MenuItem>
                <MenuItem value='open'> Open</MenuItem>
                <MenuItem value='closed'> Closed</MenuItem>
            </Select>
            <div style={{ textDecoration: "Underline"}}></div>                       
            {SearchDataRows()}
        </div>
    )
}