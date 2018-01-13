import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import './Loading.less';

export default class Loading extends Component {
	render() {
        let { tip } = this.props;
		return (
            <div className="loading">
                <div className="loading-mask">
                    <div className="loading-outter">
                        <div className="loading-wrap">
                            <div className="loading-ring" />
                        </div>
                        <div className="loading-rect" />
                        <div className="loading-text">{ tip }</div>
                    </div>
                </div>
            </div>
		);
	}
}

Loading.propTypes = {
    tip: PropTypes.string,
};

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
