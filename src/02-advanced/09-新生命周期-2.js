import React, { Component } from 'react'
 
export default class APP extends Component {

    state = {
        myText: '1111'
    }

    getSnapshotBeforeUpdate() {
        console.log('getSnapshotBeforeUpdate')
        return 100;
    }

    // componentWillUpdate() {
    //     console.log('>>componentWillUpdate');
    // }

    componentDidUpdate(prevProps, prevState, value) {
        console.log('>>componentDidUpdate', value);
    }

    render() {
        console.log('>>render');
        return (
            <div>
                APP
                <button onClick={() => { this.setState({ myText: '22222' })}}>click</button>
                { this.state.myText }
            </div>
        )
    }
}
