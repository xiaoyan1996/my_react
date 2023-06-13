import React, { Component } from 'react'

export default class APP extends Component {
    state = {
        name: 'xixi'
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('***', nextProps, nextState);
        if (this.state.name !== nextState.name) {
            return true;
        }
        return false;
    }

    // 旧版生命周期，新版本不建议使用
    UNSAFE_componentWillUpdate() {
       
        console.log('will update', document.getElementById('content'));
    }
 
    componentDidUpdate(prevProps,prevState) {
        console.log('did update', document.getElementById('content'));
    }

    render() {
        console.log('render');
        return (
            <div id='content'>
                <button onClick={() => {
                    this.setState({ name: 'xiaoke'})
                }}>
                    click
                </button>
                {this.state.name}
            </div>
        )
    }
}
