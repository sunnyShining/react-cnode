/**
 * @author sunny
 * @email 17765293970@163.com
 * @create date 2018-01-08 22:27:30
 * @modify date 2018-01-08 22:27:30
 * @desc 头部
*/

import React, { Component } from 'react';

export default class Header extends Component {
	render() {
		return (
            <div className="navbar">
                <div className="navbar-inner">
                    <div className="container">
                        <a className="brand" href="/">
                            <img src="//o4j806krb.qnssl.com/public/images/cnodejs_light.svg" alt="logo" />
                        </a>
                        <form id="search_form" className="navbar-search" action="/search">
                            <input type="text" id="q" name="q" className="search-query span3" value="" />
                        </form>
                        <ul className="nav pull-right">
                            <li><a href="/">首页</a></li>
                            <li><a href="/getstart">新手入门</a></li>
                            <li><a href="/api">API</a></li>
                            <li><a href="/about" target="">关于</a></li>
                            <li><a href="/signup">注册</a></li>
                            <li><a href="/signin">登录</a></li>
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
