/**
 * @author sunny
 * @email 17765293970@163.com
 * @create date 2018-05-19 14:02:30
 * @desc antd对话框组件基本
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class LazyRenderBox extends Component {
    static propTypes = {
        prefixCls: PropTypes.string,
        hiddenClassName: PropTypes.string,
        className: PropTypes.string,
        visible: PropTypes.bool,
    };
    shouldComponentUpdate(nextProps) {
        return !!nextProps.hiddenClassName || !!nextProps.visible;
    }
    render() {
        let {
            className,
            hiddenClassName,
            visible
        } = this.props;
        if (!!hiddenClassName && !visible) {
            className += ' ' + hiddenClassName;
        }
        let props = Object.assign({}, this.props);
        delete props.hiddenClassName;
        delete props.visible;
        props.className = className;
        return (
            <div {...props} />
        );
    }
}
