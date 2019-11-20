import React from 'react'
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { GithubService } from '../../services/githubService'

const columns = [
    {
        Header: 'ID',
        accessor: 'id' // String-based value accessors!
    },
    {
        Header: 'Title',
        accessor: 'title', // String-based value accessors!
        filterable: true,
    },
];

const requestData = (pageSize = 1, page = 1, sorted, filtered) => {

    let filteredData = [{}];
    const params = new URLSearchParams();
    params.append('page', page);
    params.append('per_page', pageSize);
    params.append("sort", "created");
    params.append("order", "desc");

    let keyword = "";
    if (filtered.length > 0) {
        keyword = filtered[0].value
    }

    params.append("q", "label:" + keyword)

    return GithubService.get(params).then(res => {

        filteredData = res.items;

        const resp = {
            rows: filteredData.slice(pageSize * page, pageSize * page + pageSize),
            pages: Math.ceil(filteredData.length / pageSize)
        };

        return resp;

    });
};


class GithubIssues extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            pages: null,
            loading: true
        };
        this.fetchData = this.fetchData.bind(this);
    }

    fetchData = (state, instance) => {
        requestData(
            state.pageSize,
            state.page,
            state.sorted,
            state.filtered
        ).then(res => {

            let response = res;
            console.log(response)
            this.setState({
                data: response.rows,
                pages: response.pages,
                loading: false
            })


        });
    }

    render() {
        const { data } = this.state;
        return <ReactTable manual data={data} minRows={data.length} columns={columns} onFetchData={this.fetchData} />

    }
}

export default GithubIssues;