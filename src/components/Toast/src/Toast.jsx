import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import './Toast.less';

export default class Toast extends Component {
    render() {
        let { tip } = this.props;
        return (
            <div className="toast-container">
                <span className="toast-con">{ tip }</span>
            </div>
        );
    }
}

Toast.propTypes = {
    tip: PropTypes.string,
};

Toast.newInstance = function newToastInstance(properties) {
    let props = properties || {};
    let div = document.createElement('div');
    document.body.appendChild(div);
    ReactDOM.render(React.createElement(Toast, props), div);
    return {
        destroy() {
            ReactDOM.unmountComponentAtNode(div);
            document.body.removeChild(div);
        },
    };
};
