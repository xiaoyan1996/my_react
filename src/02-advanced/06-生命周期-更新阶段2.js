import React, { Component } from 'react'

export default class APP extends Component {
    state = {
        list: ['0', '1', '2'],
        current: 0
    }
    render() {
        return (
            <div>
                <input onChange={(evt) => {
                    this.setState({ current: Number(evt.target.value) });
                }}/>
                {
                    this.state.list.map((item, index) => {
                        return <Children key={index} index={index} value={item} current={this.state.current}/>
                    })
                }
               
            </div>
        )
    }
}

class Children extends Component {

    state= {
        name: 'xiaoke'
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('nextProps', nextProps);
        console.log('nextState', this.state, nextState);
        if (this.props.current === this.props.index || nextProps.current === nextProps.index) {
            return true;
        }
        return false;
    }

    render() {
        console.log('render');
        return (
            <div style={{color: this.props.current === this.props.index ? 'red' : ''}}>
                {this.props.value}
                <button onClick={() => {
                    this.setState({ name: 'xiaobai' })
                }}>btn</button>
            </div>
        )
    }
}
