import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class Card extends Component {
    state = {

    }

    // static propTypes = {
    //     name: PropTypes.string,
    //     show: PropTypes.bool
    // }

    // static defaultProps = {
    //     name: '小可2'
    // }

    render() {
        // console.log(this.props);
 
        const { name, show } = this.props;
        return (
            <div>
                <div>Card</div>
                {show && <div>{name}</div>}
            </div>
        )
    }
}

// 类属性
Card.propTypes = {
    name: PropTypes.string,
    show: PropTypes.bool
}
// 默认值
Card.defaultProps = {
    name: '小可2'
}