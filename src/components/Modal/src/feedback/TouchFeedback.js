/**
 * @author sunny
 * @email 17765293970@163.com
 * @create date 2018-05-19 14:02:30
 * @desc antd对话框组件点击回应
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TouchFeedback extends Component {
    static defaultProps = {
        disabled: false
    };
    static propTypes = {
        onTouchStart: PropTypes.func,
        onTouchEnd: PropTypes.func,
        disabled: PropTypes.bool,
        activeStyle: PropTypes.object,
        activeClassName: PropTypes.string,
        children: PropTypes.object,
    };
    constructor (props) {
        super(props);
        this.state = {
            active: false
        };
    }
    onTouchStart = (e) => {
        this.triggerEvent('TouchStart', true, e);
    }
    onTouchMove =  (e) => {
        this.triggerEvent('TouchMove', false, e);
    }
    onTouchEnd = (e) => {
        this.triggerEvent('TouchEnd', false, e);
    }
    onTouchCancel = (e) => {
        this.triggerEvent('TouchCancel', false, e);
    }
    onMouseDown = (e) => {
        // pc simulate mobile
        if (this.props.onTouchStart) {
            this.triggerEvent('TouchStart', true, e);
        }
        this.triggerEvent('MouseDown', true, e);
    }
    onMouseUp = (e) => {
        if (this.props.onTouchEnd) {
            this.triggerEvent('TouchEnd', false, e);
        }
        this.triggerEvent('MouseUp', false, e);
    }
    onMouseLeave = (e) => {
        this.triggerEvent('MouseLeave', false, e);
    }
    componentDidUpdate() {
        if (this.props.disabled && this.state.active) {
            this.setState({
                active: false
            });
        }
    }
    triggerEvent(type, isActive, ev) {
        const eventType = 'on' + type;
        const children = this.props.children;

        if (children.props[eventType]) {
            children.props[eventType](ev);
        }
        if (isActive !== this.state.active) {
            this.setState({
                active: isActive
            });
        }
    }
        render() {
            const {
                children,
                disabled,
                activeClassName,
                activeStyle
            } = this.props;

            const events = disabled ? undefined : {
                onTouchStart: this.onTouchStart,
                onTouchMove: this.onTouchMove,
                onTouchEnd: this.onTouchEnd,
                onTouchCancel: this.onTouchCancel,
                onMouseDown: this.onMouseDown,
                onMouseUp: this.onMouseUp,
                onMouseLeave: this.onMouseLeave
            };
            const child = React.Children.only(children);
            if (!disabled && this.state.active) {
                let {
                    style,
                    className
                } = child.props;
                if (activeStyle !== false) {
                    if (activeStyle) {
                        style = Object.assign({}, style, activeStyle);
                    }
                    className = `${className} ${activeClassName}`;
                }
                return React.cloneElement(child, Object.assign({ className: className,
                    style: style }, events));
            }
            return React.cloneElement(child, events);
        }
}
