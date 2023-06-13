import React from "react";

class APP extends React.Component {
    
    a = 'a';

    myRef = React.createRef();

    render() {
        return ( 
            <div>
                {/* <label htmlFor="add">Male</label> */}
                <input id="add" ref="mytext" />
                <button onClick={() => this.click()}>add</button>
                <input ref={this.myRef} />
                <button onClick={() => this.click2()}>add2</button>
            </div>
        )
    }

    click() {
        console.log('>>>', this.refs.mytext.value);
    }

    click2() {
        console.log('>>>2', this.myRef.current);
    }
} 

export default APP;