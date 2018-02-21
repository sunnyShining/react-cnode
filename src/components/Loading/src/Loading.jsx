/**
 * @author sunny
 * @email 17765293970@163.com
 * @create date 2018-01-27 10:18:39
 * @modify date 2018-01-27 10:18:39
 * @desc loading
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import './Loading.less';

export default class Loading extends Component {
	render() {
		return (
            <div className="loading">
                <div className="mask">
                    <div className="outter">
                        <span></span>&nbsp;
                        <span></span>&nbsp;
                        <span></span>&nbsp;
                        <span></span>&nbsp;
                        <span></span>
                    </div>
                </div>
            </div>
		);
	}
}

// Loading.propTypes = {
//     tip: PropTypes.string,
// };

Loading.newInstance = function newLoadingInstance(properties) {
    let props = properties || {};
    let div = document.createElement('div');
    document.body.appendChild(div);
    ReactDOM.render(React.createElement(Loading, props), div);
    return {
        destroy() {
            ReactDOM.unmountComponentAtNode(div);
            document.body.removeChild(div);
        },
    };
};
