import React from "react";
// import axios from 'axios';

class APP extends React.Component {

    constructor() {
        super();
        this.myRef = React.createRef();

        this.state = {
            values: [],
            values2: []
        }
    }

    componentDidMount() {
        // axios.get('');
    }



    render() {
        console.log('*****', 'render');
        return (
            <div>
                <input id="add" ref={this.myRef} />
                <button onClick={() => this.click(this.myRef.current.value)}>add</button>

                <input ref={'myRef2'} />
                <button onClick={() => this.click2(this.refs.myRef2.value)}>add 富文本</button>

                <div>
                    <ul>
                        {
                            this.state.values.map((value, index) =>
                                // <li key={index}>
                                //     {value}
                                //     <button onClick={() => this.delClick(index)}>del</button>
                                // </li>
                                <span key={index} dangerouslySetInnerHTML={
                                    {__html: value}
                                }>
                                </span>
                            )
                        }
                    </ul>

                </div>
            </div>
        )
    }

    click(value) {
        console.log('>>>', value);
        this.setState({
            values: [...this.state.values, value]
        })
        this.myRef.current.value = "";
    }

    click2(value) {
        console.log('>>>2', value);
        this.setState({ values2: [value] });
    }

    delClick(index) {
        const newList = [...this.state.values];
        newList.splice(index, 1);
        this.setState({ values: [...newList] });
    }

}

export default APP;