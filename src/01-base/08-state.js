import React, { Component } from 'react'

export default class APP extends Component {

    state = {
        collect: {
            status: true,
            text: '收藏'
        }
    }

    render() {
        const { collect } = this.state;

        return (
            <div>
                <h1>欢迎来到React</h1>
                <button onClick={() => this.onClick(!collect.status)}>{collect.text}</button>
            </div>
        )
    }

    onClick(status) {
        if (status) {
            this.setState({collect: {status, text: '收藏'}});
            return;
        }
        this.setState({collect: {status, text: '取消收藏'}});
    }
}

export class APP2 extends Component {
    constructor() {
        super();

        this.state = {
            collect: {
                status: true,
                text: '收藏'
            }
        }
    }

    render() {
        const { collect } = this.state;

        return (
            <div>
                <h1>欢迎来到React</h1>
                <button onClick={() => this.onClick(!collect.status)}>{collect.text}</button>
            </div>
        )
    }

    onClick(status) {
        if (status) {
            this.setState({collect: {status, text: '收藏'}});
            return;
        }
        this.setState({collect: {status, text: '取消收藏'}});
    }
}

export class APP3 {
    constructor() {
        this.a = 'a';
    }
}

const app3 = new APP3();
console.log('*****', app3.a);