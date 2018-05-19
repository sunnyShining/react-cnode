/**
 * @author sunny
 * @email 17765293970@163.com
 * @create date 2018-05-19 14:02:30
 * @desc antd对话框组件操作弹框
*/

import React from 'react';
import ReactDOM from 'react-dom';
import closest from './closest';
import Modal from './Modal';

export default function operation () {
    const actions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [{ text: '确定' }];
    const platform = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'ios';

    let closed = false;
    const prefixCls = 'am-modal';
    const div = document.createElement('div');
    document.body.appendChild(div);
    function close () {
        ReactDOM.unmountComponentAtNode(div);
        if (div && div.parentNode) {
            div.parentNode.removeChild(div);
        }
    }
    const footer = actions.map((button) => {
        // tslint:disable-next-line:only-arrow-functions
        const orginPress = button.onPress || function () {};
        button.onPress = () => {
            if (closed) {
                return;
            }
            const res = orginPress();
            if (res && res.then) {
                res.then(() => {
                    closed = true;
                    close();
                }).catch(() => {});
            } else {
                closed = true;
                close();
            }
        };
        return button;
    });
    function onWrapTouchStart (e) {
        if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
            return;
        }
        let pNode = closest(e.currentTarget, '.am-modal-footer');
        if (!pNode) {
            e.preventDefault();
        }
    }
    ReactDOM.render(
        <Modal visible={true} operation={true} transparent={true} prefixCls={prefixCls} transitionName='am-zoom' closable={false} maskClosable={true} onClose={close} footer={footer} maskTransitionName='am-fade' className='am-modal-operation' platform={platform} wrapProps={{ onTouchStart: onWrapTouchStart }} />,
        div
    );
    return {
        close: close
    };
}