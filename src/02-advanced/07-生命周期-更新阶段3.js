import React, { Component } from 'react'

export default class APP extends Component {
    state = {
        value: '11'
    }
    render() {
        return (
            <div>
                <Child value={this.state.value} />
                <button onClick={() => {
                    this.setState({ value: '22'})
                }}>btn</button>
            </div>
        )
    }
}

class Child extends Component {
    UNSAFE_componentWillReceiveProps(nextProps) {
        console.log('>>>', this.props.value, nextProps);
    }

    render() {
        
        console.log('render', this.props);
        return (
            <div>{this.props.value}</div>
        )
    }
}