import React, { Component } from "react";

import "./style/01-style.css";  // 导入 css模块， webpack的支持

class APP extends Component {
    render() {
        const str = 'Hello World';
        return (
            <div style={{ background: 'pink' }}>
                Hello React Component
                <div className="active" style={style}>{`${str}`}</div>
                <div id="myApp" style={style}>{`${str}`}</div>
            </div>
        )
    }
}

const style = { color: 'green' }

export default APP;