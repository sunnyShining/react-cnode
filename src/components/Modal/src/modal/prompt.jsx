/**
 * @author sunny
 * @email 17765293970@163.com
 * @create date 2018-05-19 14:02:30
 * @desc antd对话框组件输入弹框
*/

import React from 'react';
import ReactDOM from 'react-dom';
import closest from './closest';
import Modal from './Modal';

export default function prompt(title, message, callbackOrActions) {
    const type = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'default';
    let defaultValue = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';
    const placeholders = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : ['', ''];
    const platform = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 'ios';

    let closed = false;
    defaultValue = typeof defaultValue === 'string' ? defaultValue : typeof defaultValue === 'number' ? '' + defaultValue : '';
    if (!callbackOrActions) {
        return {
            close: function close() {}
        };
    }
    const prefixCls = 'am-modal';
    const data = {
        text: defaultValue
    };
    function onChange (e) {
        const target = e.target;
        const inputType = target.getAttribute('type');
        if (inputType !== null) {
            data[inputType] = target.value;
        }
    }
    let inputDom;
    const focusFn = (input) => {
        setTimeout(function () {
            if (input) {
                input.focus();
            }
        }, 500);
    };
    switch (type) {
        case 'login-password':
            inputDom = (
            <div className={prefixCls + '-input-container'}>
                <div className={prefixCls + '-input'}>
                    <label>
                        <input type='text' defaultValue={data.text} ref={(input) => focusFn(input)} onChange={onChange} placeholder={placeholders[0]} />
                    </label>
                </div>
                <div className={prefixCls + '-input'}>
                    <label>
                        <input type='password' defaultValue={data.password} onChange={onChange} placeholder={placeholders[1]} />
                    </label>
                </div>
            </div>
        );
        break;
        case 'secure-text':
            inputDom = (
            <div className={prefixCls + '-input-container'}>
                <div className={prefixCls + '-input'}>
                    <label>
                        <input type='password' defaultValue={data.password} ref={(input) => focusFn(input)} onChange={onChange} placeholder={placeholders[0]} />
                    </label>
                </div>
            </div>
        );
        break;
        case 'default':
        default:
            inputDom = (
            <div className={prefixCls + '-input-container'}>
                <div className={prefixCls + '-input'}>
                    <label>
                        <input type='text' defaultValue={data.text} ref={(input) => focusFn(input)} onChange={onChange} placeholder={placeholders[0]} />
                    </label>
                </div>
            </div>
        );
    }
    const content = (
        <div>
            { message }
            { inputDom }
        </div>
    );
    const div = document.createElement('div');
    document.body.appendChild(div);
    function close() {
        ReactDOM.unmountComponentAtNode(div);
        if (div && div.parentNode) {
            div.parentNode.removeChild(div);
        }
    }
    function handleConfirm(callback) {
        if (typeof callback !== 'function') {
            return;
        }
        const text = data.text === undefined ? '' : data.text;
        const password = data.password === undefined ? '' : data.password;
        const callbackArgs = type === 'login-password' ? [text, password] : type === 'secure-text' ? [password] : [text];
        return callback.apply(undefined, callbackArgs);
    }
    let actions;
    if (typeof callbackOrActions === 'function') {
        actions = [{
            text: '取消',
            onPress() {}
        }, {
            text: '确定',
            onPress() {
                handleConfirm(callbackOrActions);
            }
        }];
    } else {
        actions = callbackOrActions.map((item) => {
            return {
                text: item.text,
                onPress() {
                    return handleConfirm(item.onPress);
                }
            };
        });
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
                res.then(function () {
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
    function onWrapTouchStart(e) {
        // exclude input element for focus
        if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
            return;
        }
        let pNode = closest(e.currentTarget, '.' + prefixCls + '-content');
        if (!pNode) {
            e.preventDefault();
        }
    }
    ReactDOM.render(
        <Modal visible={true} transparent={true} prefixCls={prefixCls} title={title} closable={false} maskClosable={false} transitionName='am-zoom' footer={footer} maskTransitionName='am-fade' platform={platform} wrapProps={{onTouchStart: onWrapTouchStart}} >
            <div className={prefixCls + '-propmt-content'}>{content}</div>
        </Modal>
        , div);
    return {
        close: close
    };
}