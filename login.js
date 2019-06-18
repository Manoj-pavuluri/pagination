import React, { Component } from 'react';
//import {Lin} from 'react-dom';

export default class Login extends Component {
    state = {
        name: '',
        email: '',
        message: [],
        users: []
    }
    name1 = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };
    componentDidMount() { 
        try{
            var getUsers = localStorage.getItem("usersData");
            var json = JSON.parse(getUsers);
        }catch(json){
                this.setState({ users: JSON.parse(getUsers) })
        }
        
        
    }
    componentDidUpdate(prevprops, prevState) {
        if (prevState.users.length !== this.state.users.length) {
            const json = JSON.stringify(this.state.users)
            localStorage.setItem("userData", json)
        }
    }
    handleEnter = () => {
        let errorMessage = []
        if (!this.state.name) {
            errorMessage.push("name")
            this.setState({ message: errorMessage })
        }
        if (!this.state.email) {
            errorMessage.push("email")
            this.setState({ message: errorMessage })
        } if (this.state.name && this.state.email) {            
                this.setState({ users: this.state.users.push({
                    name: this.state.name,
                    email: this.state.email
                }) });
           
        }
    }

    render() {
        return (
            <React.Fragment>
                <div >
                    <label>Name:</label><br />
                    <input type='text' placeholder='name' name="name" onChange={this.name1} /><br />
                    {this.state.message.length ? this.state.message.map((val, kay1) => {
                        if (val === 'name') {
                            return <div key={kay1}>please enter name</div>
                        }
                    }) : ''}
                    <label>email:</label><br />
                    <input type='email' placeholder='email' name="email" value={this.state.email} onChange={this.name1} /><br />
                    {this.state.message.length ? this.state.message.map(function (val, key) {
                        if (val === 'email') {
                            return <div key={key}>please enter email</div>
                        }
                    }) : ''}
                    <button style={{ marginTop: '10px' }} onClick={this.handleEnter}>submit</button>
                </div>
                <div>
                <table className="table table-border">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>UserID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.users.length ? this.state.users.map((val, key2) => (
                            <tr key={key2}>
                                <td>{val.name}</td>
                                <td>{val.email}</td>
                            </tr>
                        )
                        ) : null}
                    </tbody>
                </table> 
                </div>
            </React.Fragment>
        )
    }
}

