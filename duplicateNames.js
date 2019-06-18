import React, { Component } from 'react'


class DuplicateNames extends Component {
    constructor() {
        super();
        this.state = {
            autoFocus: true,
            data: [
                { name: 'Arjun', id: '54' }
            ]
        }
    }

    getInput = () => {
        let self = this;
        return self.state.data.map((val, ind) => {
            return (
                < div key={ind}>
                    <span> <input autoFocus={this.state.autoFocus} onChange={(event) => self.changeVal(event, ind, 'name')} value={val.name} type='text' /></span>
                    <span> <input autoFocus={this.state.autoFocus} value={val.id} onChange={(event) => { self.changeVal(event, ind, 'id') }} type='text' /></span>
                    <br />
                </div>
            )
        })
    }
    changeVal = (event, ind, ele) => {
        this.state.data[ind][ele] = event.target.value;
        this.setState({
            data: this.state.data
        })
    }
    add = () => {
        this.setState((prev) => {
            let last = prev.data[prev.data.length - 1];
            if (last.name && last.id)
                return prev.data.push({ name: '', id: '' })
        })
    }
    render() {
        return (
            <div>
                {this.getInput()}
                <button onClick={this.add}>add</button>
            </div>
        )

    }
}

export default DuplicateNames
