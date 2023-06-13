import React, { Component } from 'react'

class Navbar extends Component {

    render() {
        const { event } = this.props;
        return (
            <div>
                <div>
                    Navbar
                    <button onClick={() => event()}>按钮</button>
                </div>
            </div>
        )
    }
}

class Sidebar extends Component {
    render() {
        return (
            <div>
                <div>Sidebar</div>
            </div>
        )
    }
}

export default class APP extends Component {
    state = {
        isShow: true
    }

    render() {
        return (
            <div>
                <Navbar event={this.onNavbarClick}/>
                {this.state.isShow && <Sidebar />}
            </div>
        )
    }

    onNavbarClick = (val) => {
        this.setState({isShow: !this.state.isShow})
        console.log('>>', val);
    }
}
