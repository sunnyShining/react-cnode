/**
 * @author sunny
 * @email 17765293970@163.com
 * @create date 2018-05-19 14:02:30
 * @desc antd对话框组件警告弹窗
*/

import React from 'react';
import ReactDOM from 'react-dom';
import closest from './closest';
import Modal from './Modal';

export default function alert(title, message) {
    const actions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [{ text: '确定' }];
    const platform = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'ios';
    let closed = false;

    if (!title && !message) {
        return {
            close () {}
        };
    }
    const div = document.createElement('div');
    document.body.appendChild(div);
    function close() {
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
    const prefixCls = 'am-modal';
    function onWrapTouchStart(e) {
        if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
            return;
        }
        const pNode = closest(e.currentTarget, '.' + prefixCls + '-footer');
        if (!pNode) {
            e.preventDefault();
        }
    }
    ReactDOM.render(
        <Modal visible={true} transparent={true} title={title} transitionName='am-zoom' closable={false} maskClosable={false} footer={footer} maskTransitionName='am-fade' platform={platform} wrapProps={{onTouchStart: onWrapTouchStart}}>
            <div className={prefixCls + '-alert-content'}>
                {
                    message
                }
            </div>
        </Modal>,
        div
    );
    return {
        close: close
    };
}