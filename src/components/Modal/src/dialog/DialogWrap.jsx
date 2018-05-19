/**
 * @author sunny
 * @email 17765293970@163.com
 * @create date 2018-05-19 14:02:30
 * @desc antd对话框组件基本
*/

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Dialog from './Dialog';
import './DialogWrap.css';

function noop() {}
const IS_REACT_16 = !!ReactDOM.createPortal;

export default class DialogWrap extends Component {
    static defaultProps = {
        visible: false,
        prefixCls: 'rmc-dialog',
        onClose: noop
    };
    static propTypes = {
        prefixCls: PropTypes.string,
        visible: PropTypes.bool,
    };
    saveRef = (node) => {
        if (IS_REACT_16) {
            this._component = node;
        }
    }
    getComponent = (visible) => {
        var props = Object.assign({}, this.props);
        ['visible', 'onAnimateLeave'].forEach((key) => {
            if (props.hasOwnProperty(key)) {
                delete props[key];
            }
        });
        return (
            <Dialog
                {...props}
                visible = {visible}
                onAnimateLeave = {this.removeContainer}
                ref = {this.saveRef}
            />
        );
    }
    removeContainer = () => {
        if (this.container) {
            if (!IS_REACT_16) {
                ReactDOM.unmountComponentAtNode(this.container);
            }
            this.container.parentNode.removeChild(this.container);
            this.container = null;
        }
    }
    getContainer = () => {
        if (!this.container) {
            const container = document.createElement('div');
            var containerId = this.props.prefixCls + '-container-' + new Date().getTime();
            container.setAttribute('id', containerId);
            document.body.appendChild(container);
            this.container = container;
        }
        return this.container;
    }
    componentDidMount() {
        if (this.props.visible) {
            this.componentDidUpdate();
        }
    }
    shouldComponentUpdate(_ref) {
        const visible = _ref.visible;

        return !!(this.props.visible || visible);
    }
    componentWillUnmount() {
        if (this.props.visible) {
            if (!IS_REACT_16) {
                this.renderDialog(false);
            } else {
                // TODO for react@16 createPortal animation
                this.removeContainer();
            }
        } else {
            this.removeContainer();
        }
    }
    componentDidUpdate() {
        if (!IS_REACT_16) {
            this.renderDialog(this.props.visible);
        }
    }
    renderDialog(visible) {
        ReactDOM.unstable_renderSubtreeIntoContainer(this, this.getComponent(visible), this.getContainer());
    }
    render() {
        const { visible } = this.props;

        if (IS_REACT_16 && (visible || this._component)) {
            return ReactDOM.createPortal(this.getComponent(visible), this.getContainer());
        }
        return null;
    }
}