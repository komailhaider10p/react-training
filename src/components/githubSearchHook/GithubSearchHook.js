import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Row from './Row';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

export default function GithubSearchHook() {
    const [issues, setIssues] = useState([], {});
    const [state, setState] = React.useState('all');
    
    const handleChange = event => {
        setState(event.target.value);
        updateData(event.target.value);
      };

    useEffect(() => {
        updateData(state);
    }, []);

    function updateData(issueState) {
        const url = `https://api.github.com/repos/CyC2018/GFM-Converter/issues?state=${issueState}`;
        axios.get(url)
        .then(response => setIssues(response.data));
    }

    function createRows() {
        let rows = [];
        for (var i = 0; i < issues.length; i++) {
            rows.push(
                <Row key={issues[i].id} data={issues[i]}/>
            )
        }
        return rows;
    }

    return (
        <div>
            <h5>Issue List</h5>
            <Select
                value={state}
                onChange={handleChange}
                >
                <MenuItem value='all'>All</MenuItem>
                <MenuItem value='open'>Open</MenuItem>
                <MenuItem value='closed'>Closed</MenuItem>
            </Select>
            {createRows()}
        </div>
    )
}