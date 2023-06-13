import React, { Component } from 'react';


class Navbar extends Component {
  render() {
    return (
      <div>Navbar</div>
    )
  }
}

class Swipper extends Component {
    render() {
        return (
            <div>Swipper</div>
        )
    }
}

function Children() {
    return (
        <div>Children</div>
    )
}

function Tabbar() {
    return (
        <div>
            Tabbar
            <Children />
        </div>
    )
}


export default class APP extends Component {
  render() {
    return (
      <div>
        <span>03-nesting</span>
        <Navbar />
        <Swipper />
        <Tabbar>
        </Tabbar>
      </div>
    )
  }
}
