/**
 * @author sunny
 * @email 17765293970@163.com
 * @create date 2018-01-08 22:27:30
 * @modify date 2018-01-08 22:27:30
 * @desc 头部
*/

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as app from '../../redux/actions/app';
import Dialog from '../Dialog/index';
import Toast from '../Toast/index';

class Header extends Component {
    signIn = () => {
        let self = this;
        Dialog.open({
            showInput: true,
            inputPlaceholder: '请输入accesstoken',
            confirmButtonText: '登陆',
            confirmCallBack: async function (accesstoken) {
                if (accesstoken === '' || !accesstoken) {
                    Toast.info('accesstoken不能为空！');
                } else {
                    const { getAccess } = self.props;
                    await getAccess({
                        accesstoken
                    });
                    const { accessInfo, changeAccesstoken, getInfo, getMessage } = self.props;
                    if (accessInfo.success) {
                        changeAccesstoken({
                            accesstoken
                        });
                        await getMessage({
                            accesstoken,
                            mdrender: true
                        });
                        await getInfo({
                            username: accessInfo.loginname
                        });
                        Dialog.close();
                        Toast.info('登录成功！');
                        window.localStorage.setItem('accesstoken', accesstoken);
                        setTimeout(() => {
                            window.location.reload();
                        }, 1000);
                    } else {
                        Toast.info('accesstoken不正确，请重新输入！');
                    }
                }
            },
            cancelCallBack(accesstoken) {
                Dialog.close();
            },
        });
    }
    logout = () => {
        let self = this;
        Dialog.open({
            showInput: false,
            message: '确定要登出吗？',
            confirmButtonText: '确定',
            confirmCallBack: async function (data) {
                window.localStorage.removeItem('accesstoken');
                const { getAccess } = self.props;
                await getAccess({
                    accesstoken: ''
                });
                const { changeAccesstoken } = self.props;
                changeAccesstoken({
                    accesstoken: '',
                });
                Dialog.close();
                Toast.info('登出成功！');
                setTimeout(() => {
                    window.location.reload();
                }, 1000);
            },
            cancelCallBack(accesstoken) {
                Dialog.close();
            },
        });
    }
    setting = () => {
        Dialog.open({
            showInput: false,
            message: '请移步cnode官网修改个人信息！',
            showOneBtn: true,
            oneBtnText: '我知道了',
            oneBtnCallBack() {
                Dialog.close();
            },
        });
    }
	render() {
        let { accessInfo, count } = this.props;
		return (
            <div className="navbar">
                <div className="navbar-inner">
                    <div className="container">
                        <Link className="brand" to="/home">
                            <img src="//o4j806krb.qnssl.com/public/images/cnodejs_light.svg" alt="logo" />
                        </Link>
                        {/*<form id="search_form" className="navbar-search" action="/search">
                            <input type="text" id="q" name="q" className="search-query span3" value="" />
                        </form>*/}
                            {
                                (() => {
                                    if (accessInfo.success) {
                                        return (
                                            <ul className="nav pull-right">
                                                <li><Link to="/home">首页</Link></li>
                                                <li><Link to="/messages">{count.data ? <span className="big messages_count">{count.data}</span> : null}未读消息</Link></li>
                                                <li><Link to="/create/new">发布话题</Link></li>
                                                <li><Link to="/getstart">新手入门</Link></li>
                                                <li><Link to="/api">API</Link></li>
                                                <li><Link to="/about">关于</Link></li>
                                                <li onClick={() => this.setting()}><a>设置</a></li>
                                                <li onClick={() => this.logout()}><a>退出</a></li>
                                            </ul>
                                        );
                                    } else {
                                        return (
                                            <ul className="nav pull-right">
                                                <li><Link to="/home">首页</Link></li>
                                                <li><Link to="/getstart">新手入门</Link></li>
                                                <li><Link to="/api">API</Link></li>
                                                <li><Link to="/about">关于</Link></li>
                                                <li onClick={() => this.signIn()}><a>登陆</a></li>
                                            </ul>
                                        );
                                    }
                                })()
                            }
                        <a className="btn btn-navbar" id="responsive-sidebar-trigger">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </a>
                    </div>
                </div>
            </div>
		);
	}
}

Header.propTypes = {
    state: PropTypes.object,
}

export default connect(
    state => {return {...state.app}},
    dispatch => bindActionCreators(app, dispatch)
)(Header)