import React, { Component } from 'react'

export default class Table extends Component {

    render() {
        const userData = localStorage.getItem("userData");
        return (
            <div>
                hello
                {/* <table className="table table-border">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>UserID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.history.location.state.length ? this.props.history.location.state.map((val, key2) => (
                            <tr key={key2}>
                                <td>{val.name}</td>
                                <td>{val.email}</td>
                            </tr>
                        )
                        ) : null}
                    </tbody>
                </table> */}
            </div>
        )
    }
}
