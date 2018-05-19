import React, { Component } from 'react';
import { Button } from 'react-weui';
import 'weui';
import Modal from '../../components/Modal/index';

function closest (el, selector) {
    const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
    while (el) {
        if (matchesSelector.call(el, selector)) {
            return el;
        }
        el = el.parentElement;
    }
    return null;
}
const alert = Modal.alert;
const operation = Modal.operation;
const prompt = Modal.prompt;
const showAlert = () => {
    const alertInstance = alert('Delete', 'Are you sure???', [
        { text: 'Cancel', onPress: () => console.log('cancel'), style: 'default' },
        { text: 'OK', onPress: () => console.log('ok') },
    ]);
    setTimeout(() => {
        // 可以调用close方法以在外部close
        console.log('auto close');
        alertInstance.close();
    }, 500000);
};

export default class ModalC extends Component {
    constructor (props) {
        super(props);
        this.state = {
            modal1: false,
            modal2: false,
        };
    }
    showModal = key => (e) => {
        console.log(key);
        e.preventDefault(); // 修复 Android 上点击穿透
        this.setState({
            [key]: true,
        });
    }
    onClose = key => () => {
        this.setState({
            [key]: false,
        });
    }
    onWrapTouchStart = (e) => {
        // fix touch to scroll background page on iOS
        if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
            return;
        }
        const pNode = closest(e.target, '.am-modal-content');
        if (!pNode) {
            e.preventDefault();
        }
    }
    render () {
        return (
            <div>
                <Button type='primary' size='small' onClick={this.showModal('modal1')}>basic</Button>
                <Modal
                    visible={this.state.modal1}
                    transparent
                    maskClosable={false}
                    onClose={this.onClose('modal1')}
                    title=''
                    footer={[{ text: '知道了', onPress: () => { console.log('ok'); this.onClose('modal1')(); } }]}
                    wrapProps={{ onTouchStart: this.onWrapTouchStart }}
                >
                    <div style={{ height: 100, overflow: 'scroll' }}>
                        scoll content...<br />
                        scoll content...<br />
                        scoll content...<br />
                        scoll content...<br />
                        scoll content...<br />
                        scoll content...<br />
                    </div>
                </Modal>
                <Button size='small' onClick={this.showModal('modal2')}>popup</Button>
                <Modal
                    popup
                    visible={this.state.modal2}
                    onClose={this.onClose('modal2')}
                    animationType='slide-up'
                >
                    <div className='popup-list'>
                        <div style={{display: 'flex', justifyContent: 'space-between', padding: '12px 17px 30px 17px'}}>
                            <div style={{padding: '11px 40px', border: '1px solid #609afb', color: '#609afb', borderRadius: '5px', fontSize: '13px'}}>股票名称</div>
                            <div style={{padding: '11px 40px', border: '1px solid #609afb', color: '#609afb', borderRadius: '5px', fontSize: '13px'}}>股票代码</div>
                            <div style={{padding: '11px 40px', border: '1px solid #609afb', color: '#609afb', borderRadius: '5px', fontSize: '13px'}}>买入价格</div>
                        </div>
                        <div>
                            <Button type='primary' onClick={this.onClose('modal2')}>买入</Button>
                        </div>
                    </div>
                </Modal>
                <Button size='small' onClick={showAlert}>customized buttons</Button>
                <Button size='small'
                    onClick={() =>
                        alert('Delete', 'Are you sure???', [
                            { text: 'Cancel', onPress: () => console.log('cancel') },
                            { text: 'OK', onPress: () => console.log('ok') },
                        ])
                    }>
                    confirm
                </Button>
                <Button size='small'
                    onClick={() =>
                        alert('Much Buttons', <div>More than two buttons</div>, [
                            { text: 'Button1', onPress: () => console.log('第0个按钮被点击了') },
                            { text: 'Button2', onPress: () => console.log('第1个按钮被点击了') },
                            { text: 'Button3', onPress: () => console.log('第2个按钮被点击了') },
                        ])
                    }
                >
                    more than two buttons
                </Button>
                <Button size='small' onClick={() => prompt('input name', 'please input your name',
                    [
                        {
                            text: 'Close',
                            onPress: value => new Promise((resolve) => {
                                setTimeout(() => {
                                    resolve();
                                    console.log(`value:${value}`);
                                }, 1000);
                            }),
                        },
                        {
                            text: 'Hold on',
                            onPress: value => new Promise((resolve, reject) => {
                                setTimeout(() => {
                                    reject();
                                    console.log(`value:${value}`);
                                }, 1000);
                            }),
                        },
                    ], 'default', null, ['input your name'])}
                >promise</Button>
                <Button size='small' onClick={() => prompt('defaultValue', 'defaultValue for prompt', [
                    { text: 'Cancel' },
                    { text: 'Submit', onPress: value => console.log(`输入的内容:${value}`) },
                ], 'default', '100')}
                >defaultValue</Button>

                <Button size='small' onClick={() => prompt(
                    'Password',
                    'You can custom buttons',
                    [
                        { text: '取消' },
                        { text: '提交', onPress: password => console.log(`密码为:${password}`) },
                    ],
                    'secure-text',
                )}
                >secure-text custom buttons</Button>

                <Button size='small' onClick={() => prompt(
                    'Login',
                    'Please input login information',
                    (login, password) => console.log(`login: ${login}, password: ${password}`),
                    'login-password',
                    null,
                    ['Please input name', 'Please input password'],
                )}
                >login-password</Button>
                <Button size='small' onClick={() => operation([
                    { text: '标为未读', onPress: () => console.log('标为未读被点击了') },
                    { text: '置顶聊天', onPress: () => console.log('置顶聊天被点击了') },
                ])}
                >operation</Button>
            </div>
        );
    }
}