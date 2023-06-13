import React, { Component } from 'react'

export default class APP extends Component {
    render() {
        return (
            <div>
                <div>
                    <Child>
                        <div>111111</div>
                        <div>111111</div>
                        <div>111111</div>
                    </Child>
                </div>
            </div>
        )
    }
}

class Child extends Component {
    render() {
        console.log('>>', this.props.children);
        return (
            <div>
                child

                {/* 插槽 */}
                {this.props.children}

                {this.props.children[0]}
            </div>
        )
    }
}

/**
 * 1. 为了复用
 * 2. 一定程度减少父子通信
 */

