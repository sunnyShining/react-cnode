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
    componentWillMount = () => {
        const { accesstoken, getAccess } = this.props;
        getAccess({
            accesstoken
        });
    }
    signIn = () => {
        Dialog.open({
            showInput: true,
            inputPlaceholder: '请输入accesstoken',
            confirmButtonText: '登陆',
            confirmCallBack(accesstoken) {
                if (accesstoken === '' || !accesstoken) {
                    Toast.info(`${accesstoken}不能为空！`);
                } else {
                    Dialog.close();
                    Toast.info('登录成功！');
                    window.localStorage.setItem('accesstoken', accesstoken);
                    setTimeout(() => {
                        window.location.reload();
                    }, 1000);
                }
            },
            cancelCallBack(accesstoken) {
                Dialog.close();
            },
        });
    }
    logout = () => {
        window.localStorage.removeItem('accesstoken');
        Toast.info('登出成功');
        setTimeout(() => {
            window.location.reload();
        }, 1000);
    }
	render() {
        let { accessInfo } = this.props;
		return (
            <div className="navbar">
                <div className="navbar-inner">
                    <div className="container">
                        <Link className="brand" to="/">
                            <img src="//o4j806krb.qnssl.com/public/images/cnodejs_light.svg" alt="logo" />
                        </Link>
                        <form id="search_form" className="navbar-search" action="/search">
                            <input type="text" id="q" name="q" className="search-query span3" value="" />
                        </form>
                            {
                                (() => {
                                    if (accessInfo.success) {
                                        return (
                                            <ul className="nav pull-right">
                                                <li><Link to="/home">首页</Link></li>
                                                <li><Link to="/messages">未读消息</Link></li>
                                                <li><Link to="/create">发布话题</Link></li>
                                                <li><Link to="/getstart">新手入门</Link></li>
                                                <li><Link to="/api">API</Link></li>
                                                <li><Link to="/about">关于</Link></li>
                                                <li><Link to="/setting">设置</Link></li>
                                                <li onClick={() => this.logout()}><a>退出</a></li>
                                            </ul>
                                        );
                                    } else {
                                        return (
                                            <ul className="nav pull-right">
                                                <li><Link to="/home">首页</Link></li>
                                                <li><Link to="/messages">未读消息</Link></li>
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