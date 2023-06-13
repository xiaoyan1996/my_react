import React, { Component } from 'react'

export default class APP extends Component {

    state = {
        userName: 'xiaoke'
    }

    render() {
        return (
            <div>
                <h1>登陆页</h1>
                <input type={'text'} ref={this.userName} value={this.state.userName} onChange={(eve) => {
                    this.setState({userName: eve.target.value});
                }}/>
                <button onClick={() => {
                    
                }}>登陆按钮</button>
                <button onClick={() => {
                   this.setState({userName: ''});
                }}>重置</button>
            </div>
        )
    }
}
