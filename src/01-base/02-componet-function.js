import PropTypes from 'prop-types';

function APP(props) {

    console.log('**', props);
    const { name } = props;

    return (
        <div>
            <div>{name}</div>
        </div>
    )
}

// 类属性
APP.propTypes = {
    name: PropTypes.string,
    show: PropTypes.bool
}
// 默认值
APP.defaultProps = {
    name: '小可2'
}

export default APP;