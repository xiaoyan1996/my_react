import React, { Component } from 'react'

class Card extends Component {

    state = {
        name: 'xiaoke',
        list: ''
    }

    componentDidMount() {
        console.log('componentDidMount>>>>');
    }

    static getDerivedStateFromProps(nextProps, preState) {
        console.log('getDerivedStateFromProps>>', nextProps, preState);
        return {
            name: nextProps.name
        };
    } 

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate>>>>', prevProps, prevState, this.state.name);
        if (prevState.name === this.state.name) {
            return;
        }
        this.setState({ list: 'list', name: this.state.name}) 
    }

    render() {
        console.log('render>>>>',this.state.name);
        return (
            <div>
                <button onClick={this.props.onClick}>click</button>
                <div>{this.state.name}</div>
            </div>
        )
    }
}

export default class App extends Component {
    state = {
        name: ''
    }
    render() {
        return (
            <div>
                <Card name={this.state.name} onClick={() => {
                    this.setState({ name: 'xiaohu' });
                }}/>
            </div>
        )
    }
}
