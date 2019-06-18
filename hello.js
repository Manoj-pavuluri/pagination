import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPosts } from './Actions';
import { Link } from 'react-router-dom'

class Hello extends Component {
    getdata = () => {
        this.props.getPosts()
    }
    render() {
        return (
            <div>
                <h1>hello world <button onClick={this.getdata}>Hello</button></h1>
                <Link to='./dashbord'>link</Link>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    data: state.posts.manoj
})
const mapDispatchtoProps = dispatch => ({
    getPosts: () => dispatch(getPosts())
})

export default connect(mapStateToProps, mapDispatchtoProps)(Hello);