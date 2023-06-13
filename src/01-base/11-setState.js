import React, { Component } from 'react'

export default class APP extends Component {
    state = {
        value: 0
    }

    render() {
        console.log('render');
        return (
            <div>
                <button onClick={() => this.onClick()}>Add</button>
                <div>{this.state.value}</div>
            </div>
        )
    }

    onClick() {

        setTimeout(() => {
            this.setState({
                value: this.state.value + 1
            })
    
            console.log(this.state.value);
    
            this.setState({
                value: this.state.value + 1
            })
    
            console.log(this.state.value);
    
            this.setState({
                value: this.state.value + 1
            })
    
            console.log(this.state.value);
        }, 0);

     
    }
}
