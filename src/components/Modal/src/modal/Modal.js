/**
 * @author sunny
 * @email 17765293970@163.com
 * @create date 2018-05-19 14:02:30
 * @desc antd对话框组件基本组件
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dialog from '../dialog/DialogWrap';
import TouchFeedback from '../feedback/TouchFeedback';
import './Modal.css';

/* eslint-disable */
let __rest = this && this.__rest || function (s, e) {
    let t = {};
    for (let p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) {
            t[p] = s[p];
        }
    }
    if (s != null && typeof Object.getOwnPropertySymbols === 'function') {
        for (let i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
        }
    }
    return t;
};
/* eslint-enable */
export default class Modal extends Component {
    static defaultProps = {
        prefixCls: 'am-modal',
        transparent: false,
        popup: false,
        animationType: 'slide-down',
        animated: true,
        style: {},
        onShow () {},
        footer: [],
        closable: false,
        operation: false,
        platform: 'ios'
    };
    static propTypes = {
        prefixCls: PropTypes.string,
        className: PropTypes.string,
        wrapClassName: PropTypes.string,
        transitionName: PropTypes.string,
        activeClassName: PropTypes.string,
        maskTransitionName: PropTypes.string,
        style: PropTypes.object,
        platform: PropTypes.string,
        operation: PropTypes.bool,
        animated: PropTypes.bool,
        transparent: PropTypes.bool,
        popup: PropTypes.bool,
        animationType: PropTypes.string,
        footer: PropTypes.array,
    };
    renderFooterButton(button, prefixCls, i) {
        let buttonStyle = {};
        if (button.style) {
            buttonStyle = button.style;
            if (typeof buttonStyle === 'string') {
                const styleMap = {
                    cancel: {},
                    'default': {},
                    destructive: { color: 'red' }
                };
                buttonStyle = styleMap[buttonStyle] || {};
            }
        }
        const onClickFn = (e) => {
            e.preventDefault();
            if (button.onPress) {
                button.onPress();
            }
        };
        return (
            <TouchFeedback activeClassName={prefixCls + '-button-active'} key={i}>
                <a className={prefixCls + '-button'} role='button' style={buttonStyle} onClick={onClickFn}>
                    { button.text ? button.text : 'Button' }
                </a>
            </TouchFeedback>
        );
    }
    render() {
        const {
            prefixCls,
            className,
            wrapClassName,
            transitionName,
            maskTransitionName,
            style,
            platform,
            operation,
            animated,
            transparent,
            popup,
            animationType
        } = this.props;
        const footer = this.props.footer === undefined ? [] : this.props.footer;
        const restProps = __rest(this.props, ['prefixCls', 'className', 'wrapClassName', 'transitionName', 'maskTransitionName', 'style', 'platform', 'footer', 'operation', 'animated', 'transparent', 'popup', 'animationType']);
        const btnGroupClass = `${prefixCls}-button-group-${footer.length === 2 && !operation ? 'h' : 'v'} ${prefixCls}-button-group-${operation ? 'operation' : 'normal'}`;
        const footerDom = footer.length
            ? <div className={btnGroupClass} role='group'>
                {
                    footer.map((button, i) => {
                        return (
                            // tslint:disable-next-line:jsx-no-multiline-js
                            this.renderFooterButton(button, prefixCls, i)
                        );
                    })
                }
            </div> : null;
        let transName, maskTransName;
        if (animated) {
            // tslint:disable-next-line:prefer-conditional-expression
            if (transparent) {
                transName = maskTransName = 'am-fade';
            } else {
                transName = maskTransName = 'am-slide-up';
            }
            if (popup) {
                transName = animationType === 'slide-up' ? 'am-slide-up' : 'am-slide-down';
                maskTransName = 'am-fade';
            }
        }
        const wrapCls = `${wrapClassName || ''} ${popup ? prefixCls + '-wrap-popup' : ''}`;
        const cls = `${className || ''} ${transparent ? prefixCls + '-transparent' : ''} ${popup ? prefixCls + '-popup' : ''} ${(popup && animationType) ? prefixCls + '-popup-' + animationType : ''} ${platform === 'android' ? prefixCls + '-android' : ''}`;
        return (
            <Dialog {...restProps} prefixCls={prefixCls} className={cls} wrapClassName={wrapCls} transitionName={transitionName || transName} maskTransitionName={maskTransitionName || maskTransName} style={style} footer={footerDom} />
        );
    }
}
