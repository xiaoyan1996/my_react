import React, { Component } from 'react';

// 创建context对象
const GlobalContext = React.createContext();

class Field extends Component {
    state = {
        value: ''
    }

    clear() {
        this.setState({ value: '' });
    }

    render() {
        const { label, type } = this.props;

        return (
            <GlobalContext.Consumer>
                {
                    (value) => {
                        console.log('??', value)
                        return (
                            <div style={{ backgroundColor: 'pink' }}>
                                <label>{label}</label>
                                <input type={type} value={this.state.value} onChange={(event) => {
                                    this.setState({ value: event.target.value })
                                }}></input>
                            </div>
                        )
                    }
                }
            </GlobalContext.Consumer>

        )
    }
}

export default class APP extends Component {

    userName = React.createRef();
    password = React.createRef();

    state = {
        userName: 'ddd',
        passWord: ''
    }


    render() {
        return (
            <GlobalContext.Provider value={{
                call: '电话',
                sms: '短信'
            }}>
                <div>
                    <h1>登陆页面</h1>

                    <Field label={"用户名"} type={"text"} value={this.state.userName} ref={this.userName} />
                    <Field label={"密码"} type={"password"} ref={this.password} />
                    <button onClick={() => {
                        console.log(this.userName.current.state.value, this.password.current.state.value);
                    }}>登陆</button>
                    <button onClick={() => {
                        this.userName.current.clear();
                        this.password.current.clear();
                    }}>取消</button >
                </div>
            </GlobalContext.Provider>
        )
    }
}
