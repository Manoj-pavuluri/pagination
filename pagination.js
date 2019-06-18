import React, { Component } from 'react';
import Axios from 'axios';
import Pagination from 'react-js-pagination';

export default class pagination extends Component {
    state = {
        data:[],
        activePage: 5,
        itemsCountPerPage: 10
    };

    componentDidMount() {
             Axios.get('http://dummy.restapiexample.com/api/v1/employees')
                .then(res => this.setState({ data: res.data }))
         }


    handlePageChange = (pageNumber) => {
        this.setState({ activePage: pageNumber });
    }

    render() {
        const indexOfLastTodo = this.state.activePage * this.state.itemsCountPerPage;
        const indexOfFirstTodo = indexOfLastTodo - this.state.itemsCountPerPage;
        const currentTodos = this.state.data.slice(indexOfFirstTodo, indexOfLastTodo);
        return (
            <div>
                <Pagination
                    prevPageText='prev'
                    nextPageText='next'
                    firstPageText='first'
                    lastPageText='last'
                    activePage={this.state.activePage}
                    totalItemsCount={this.state.data.length}
                    itemsCountPerPage={this.state.itemsCountPerPage}
                    onChange={this.handlePageChange}
                    itemClass="page-item"
                    linkClass="page-link"
                />
                {currentTodos&&currentTodos.map((val,key)=>(
                    <li key={key}>{val.employee_name}</li>
                ))}
            </div>
        );
    }
}
