import React, { Component } from 'react'

export default class APP extends Component {
    userName = React.createRef();

    render() {
        return (
            <div>
                <h1>登陆页</h1>
                <input type={'text'} ref={this.userName} defaultValue='小可'/>
                <button onClick={() => {
                    console.log(this.userName.current.value);
                }}>登陆按钮</button>
                <button onClick={() => {
                    this.userName.current.value = '';
                }}>重置</button>
            </div>
        )
    }
}
