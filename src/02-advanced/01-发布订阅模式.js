import React, { Component } from 'react'

export default class APP extends Component {
  render() {
    return (
      <div>01-发布订阅模式</div>
    )
  }
}

// 调度中心
const bus = {

    list: [],

    // 订阅
    subscribe(callback) {
        this.list.push(callback)
    },

    // 发布
    publish(text) {
        this.list.forEach(callback => {
            callback && callback(text);
        });
    }
}

// 订阅者
bus.subscribe((value) => {
    console.log('>>', value);
});

// 发布者
setTimeout(() => {
    bus.publish('xiaoke', this);
}, 0);
