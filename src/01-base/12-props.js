import React, { Component } from 'react'

import Card from './component/card';
import Card2 from './02-componet-function';

export default class APP extends Component {
    state = {
        name: ''
    }

    render() {
        return (
            <div>
                {/* 类组件 */}
                <Card name={'小可'} show={true}/>
                <Card show={true}/>

                {/* 函数组件 */}
                <Card2 name={'小可3'}/>
            </div>
        )
    }
}

// class Test {
//     a = 1; // 对象属性
//     static b = 2; //类属性
// }

// const test = new Test()

// console.log('>>', Test.b, test.a);
