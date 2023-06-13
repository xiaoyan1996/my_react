import React, { Component } from 'react'

export default class APP extends Component {

    state = {
        name: ''
    }

    // 16.2前老的生命周期 新版版本不建议使用
    componentWillMount() {

        console.log('will mount');
        // 渲染前最后一次修改
        // 初始化数据的作用
        this.setState({
            name: 'xiaoke'
        })
    }

    componentDidMount() {

        console.log('did mount');
        // 数据请求axios
        // 订阅函数调用
        // 基于创建的dom进行初始化

        this.setState({
            name: 'xiaoke2'
        })
    }

    render() {
        console.log('>>>>>');
        return (
            <div>
                {this.state.name}
            </div>
        )
    }
}
