import React, { Component } from 'react';

import Field from './component/field';

export default class APP extends Component {
    state = {
        userName: 'ddd',
        passWord: ''
    }

    render() {
        return (
            <div>
                <h1>登陆页面</h1>

                <Field label={"用户名"} type={"text"} value={this.state.userName} onChangeEvent={(val) => {
                    this.setState({ userName: val})
                }}/>
                <Field label={"密码"} type={"password"} onChangeEvent={(val) => {
                    this.setState({ passWord: val})
                }}/>
                <button onClick={() => {
                    console.log(this.state.userName, this.state.passWord);
                }}>登陆</button>
                <button >取消</button>
            </div>
        )
    }
}
