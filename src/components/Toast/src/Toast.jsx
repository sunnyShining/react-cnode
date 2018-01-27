/**
 * @author sunny
 * @email 17765293970@163.com
 * @create date 2018-01-27 10:18:39
 * @modify date 2018-01-27 10:18:39
 * @desc toast
*/

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
