/**
 * @author sunny
 * @email 17765293970@163.com
 * @create date 2018-01-08 22:27:30
 * @modify date 2018-01-08 22:27:30
 * @desc 头部
*/

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
	render() {
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
                        <ul className="nav pull-right">
                            <li><Link to="/home">首页</Link></li>
                            <li><Link to="/home">未读消息</Link></li>
                            <li><Link to="/getstart">新手入门</Link></li>
                            <li><Link to="/api">API</Link></li>
                            <li><Link to="/about">关于</Link></li>
                            <li><Link to="/signup">设置</Link></li>
                            <li><Link to="/signin">退出</Link></li>
                        </ul>
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
