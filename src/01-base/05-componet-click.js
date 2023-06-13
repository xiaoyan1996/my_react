import React from "react";

class APP extends React.Component {
    
    a = 'a';

    render() {
        return ( 
            <div>
                <input />
                <button onClick={this.click}>add</button>
            </div>
        )
    }

    click() {

    }
} 

// const click = () => {

// }

export default APP;