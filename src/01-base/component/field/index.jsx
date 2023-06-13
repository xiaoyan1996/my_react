import React, { Component } from 'react'

export default class APP extends Component {
    render() {
        const { label, type, value, onChangeEvent } = this.props;

        return (
            <div style={{ backgroundColor: 'pink' }}>
                <label>{label}</label>
                <input
                    type={type}
                    value={value}
                    onChange={(evt) => onChangeEvent(evt.target.value)}
                ></input>
            </div>
        )
    }
}
