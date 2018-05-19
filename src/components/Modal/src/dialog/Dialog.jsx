/**
 * @author sunny
 * @email 17765293970@163.com
 * @create date 2018-05-19 14:02:30
 * @desc antd对话框组件基本
*/

import React, { Component } from 'react';
import Animate from 'rc-animate';
import PropTypes from 'prop-types';
import LazyRenderBox from './LazyRenderBox';

function noop() {}

export default class Dialog extends Component {
    static defaultProps = {
        afterClose: noop,
        className: '',
        mask: true,
        visible: false,
        closable: true,
        maskClosable: true,
        prefixCls: 'rmc-dialog',
        onClose: noop
    };
    static propTypes = {
        closable: PropTypes.bool,
        children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
        prefixCls: PropTypes.string,
        style: PropTypes.object,
        className: PropTypes.string,
        visible: PropTypes.bool,
        bodyStyle: PropTypes.object,
        footer: PropTypes.object,
        title: PropTypes.string,
        onAnimateLeave: PropTypes.func,
        afterClose: PropTypes.func,
        wrapProps: PropTypes.object,
        mask: PropTypes.bool,
        wrapClassName: PropTypes.string,
        onClose: PropTypes.func,
        zIndex: PropTypes.number,
        wrapStyle: PropTypes.object,
        maskStyle: PropTypes.object,
        animation: PropTypes.string,
        transitionName: PropTypes.string,
        maskClosable: PropTypes.bool,
    };
    getDialogElement = () => {
        const props = this.props;
        const {
            closable,
            prefixCls,
            title,
            style,
            children,
            className,
            visible,
            bodyStyle
        } = props;
        let footer;
        if (props.footer) {
            footer = (
                <div className={prefixCls + '-footer'} ref={(el) => this.footerRef = el}>
                    {
                        props.footer
                    }
                </div>
            );
        }
        let header;
        if (title) {
            header = (
                <div className={prefixCls + '-header'} ref={(el) => this.headerRef = el}>
                    <div className={prefixCls + '-title'}>
                        { title }
                    </div>
                </div>
            );
        }
        let closer;
        if (closable) {
            closer = (
                <button onClick={this.close} aria-label='Close' className={prefixCls + '-close'} ref={(el) => this.headerRef = el}>
                    <span className={prefixCls + '-close-x'} />
                </button>
            );        }
            const transitionName = this.getTransitionName();
            const dialogElement = (
                <LazyRenderBox key='dialog-element' role='document' ref={(el) => this.dialogRef = el} style={style || {}} className={`${prefixCls} ${className || ''}`} visible={visible}>
                    <div className={prefixCls + '-content'}>
                        { closer }
                        { header }
                        <div className={prefixCls + '-body'} style={bodyStyle} ref={(el) => this.bodyRef = el}>
                            { children }
                        </div>
                        { footer }
                    </div>
                </LazyRenderBox>
            );
            return (
            <Animate key='dialog' showProp='visible' onAppear={this.onAnimateAppear} onLeave={this.onAnimateLeave} transitionName={transitionName} component='' transitionAppear={true}>
                { dialogElement }
            </Animate>
        );
    }
    onAnimateAppear = () => {
        document.body.style.overflow = 'hidden';
    }
    onAnimateLeave = () => {
        document.body.style.overflow = '';
        let { onAnimateLeave, afterClose } = this.props;
        if (this.wrapRef) {
            this.wrapRef.style.display = 'none';
        }
        onAnimateLeave && onAnimateLeave();
        afterClose && afterClose();
    }
    close = (e) => {
        if (this.props.onClose) {
            this.props.onClose(e);
        }
    }
    onMaskClick = (e) => {
        if (e.target === e.currentTarget) {
            this.close(e);
        }
    }
    componentWillUnmount() {
        // fix: react@16 no dismissing animation
        document.body.style.overflow = '';
        if (this.wrapRef) {
            this.wrapRef.style.display = 'none';
        }
    }
    getZIndexStyle() {
        let style = {};
        const props = this.props;
        if (props.zIndex !== undefined) {
            style.zIndex = props.zIndex;
        }
        return style;
    }
    getWrapStyle() {
        const wrapStyle = this.props.wrapStyle || {};
        return Object.assign({}, this.getZIndexStyle(), wrapStyle);
    }
    getMaskStyle() {
        let maskStyle = this.props.maskStyle || {};
        return Object.assign({}, this.getZIndexStyle(), maskStyle);
    }
    getMaskTransitionName() {
        const props = this.props;
        let transitionName = props.maskTransitionName;
        let animation = props.maskAnimation;
        if (!transitionName && animation) {
            transitionName = props.prefixCls + '-' + animation;
        }
        return transitionName;
    }
    getTransitionName() {
        let {transitionName, animation, prefixCls} = this.props;
        if (!transitionName && animation) {
            transitionName = prefixCls + '-' + animation;
        }
        return transitionName;
    }
    getMaskElement() {
        const {
            mask,
            prefixCls,
            visible,
            maskProps
        } = this.props;
        let maskElement;
        if (mask) {
            const maskTransition = this.getMaskTransitionName();
            maskElement = (
                <LazyRenderBox
                    style={this.getMaskStyle()}
                    key='mask-element'
                    className={prefixCls + '-mask'}
                    hiddenClassName={prefixCls + '-mask-hidden'}
                    visible={visible}
                    {...maskProps}
                />
            );
            if (maskTransition) {
                maskElement = (
                    <Animate key='mask' showProp='visible' transitionAppear={true} component='' transitionName={maskTransition}>
                        {maskElement}
                    </Animate>
                );
            }
        }
        return maskElement;
    }
    render() {
        const {
            prefixCls,
            maskClosable,
            visible,
            wrapClassName,
            title,
            wrapProps
        } = this.props;
        let style = this.getWrapStyle();
        if (visible) {
            style.display = null;
        }
        return (
            <div>
                {this.getMaskElement()}
                <div
                    className={`${prefixCls}-wrap ${wrapClassName || ''}`}
                    ref={(el) => this.wrapRef = el}
                    onClick={maskClosable ? this.onMaskClick : undefined}
                    role='dialog'
                    aria-labelledby={title}
                    style={style}
                    {...wrapProps}
                >
                    {this.getDialogElement()}
                </div>
            </div>
        );
    }
}
