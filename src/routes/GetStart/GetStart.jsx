import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as app from '../../redux/actions/app';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

class Getstart extends Component {
    componentWillMount = () => {
        this.changeSider();
    }
    changeSider = () => {
        const { getInfo, authorOrInfo, accessInfo } = this.props;
        let showInfo = false;
        if (accessInfo.success) {
            showInfo = true;
        }
        authorOrInfo({
            showInfo,
            isAuthor: false,
        });
        if (accessInfo && accessInfo.loginname !== '' && accessInfo.loginname) {
            getInfo({
                username: accessInfo.loginname
            });
        }
    }
    render() {
        return (
            <div>
                <div className="panel">
                    <div className="header">
                        <ul className="breadcrumb">
                            <li><Link to="/home">主页</Link><span className="divider">/</span></li>
                            <li className="active">Node.js 新手入门</li>
                        </ul>
                    </div>
                    <div className="inner topic">
                        <div className="topic_content">
                            <div className="markdown-text">
                                <h2>Node.js 入门</h2>
                                <p>《<strong>快速搭建 Node.js 开发环境以及加速 npm</strong>》</p>
                                <p><a href="http://fengmk2.com/blog/2014/03/node-env-and-faster-npm.html" target="_blank" rel="noopener noreferrer">http://fengmk2.com/blog/2014/03/node-env-and-faster-npm.html</a></p>
                                <p>《<strong>Node.js 包教不包会</strong>》</p>
                                <p><a href="https://github.com/alsotang/node-lessons" target="_blank" rel="noopener noreferrer">https://github.com/alsotang/node-lessons</a></p>
                                <p>《<strong>ECMAScript 6入门</strong>》</p>
                                <p><a href="http://es6.ruanyifeng.com/" target="_blank" rel="noopener noreferrer">http://es6.ruanyifeng.com/</a></p>
                                <p>《<strong>七天学会NodeJS</strong>》</p>
                                <p><a href="https://github.com/nqdeng/7-days-nodejs" target="_blank" rel="noopener noreferrer">https://github.com/nqdeng/7-days-nodejs</a></p>
                                <h2>Node.js 资源</h2>
                                <p>《<strong>前端资源教程</strong>》</p>
                                <p><a href="https://cnodejs.org/topic/56ef3edd532839c33a99d00e" target="_blank" rel="noopener noreferrer">https://cnodejs.org/topic/56ef3edd532839c33a99d00e</a></p>
                                <p>《<strong>国内的 npm 镜像源</strong>》</p>
                                <p><a href="http://cnpmjs.org/" target="_blank" rel="noopener noreferrer">http://cnpmjs.org/</a></p>
                                <p>《<strong>node weekly</strong>》</p>
                                <p><a href="http://nodeweekly.com/issues" target="_blank" rel="noopener noreferrer">http://nodeweekly.com/issues</a></p>
                                <p>《<strong>node123-<em>node.js中文资料导航</em></strong>》</p>
                                <p><a href="https://github.com/youyudehexie/node123" target="_blank" rel="noopener noreferrer">https://github.com/youyudehexie/node123</a></p>
                                <p>《<strong>A curated list of delightful Node.js packages and resources</strong>》</p>
                                <p><a href="https://github.com/sindresorhus/awesome-nodejs" target="_blank" rel="noopener noreferrer">https://github.com/sindresorhus/awesome-nodejs</a></p>
                                <p>《<strong>Node.js Books</strong>》</p>
                                <p><a href="https://github.com/pana/node-books" target="_blank" rel="noopener noreferrer">https://github.com/pana/node-books</a></p>
                                <h2>Node.js 名人</h2>
                                <p>《<strong>名人堂</strong>》</p>
                                <p><a href="https://github.com/cnodejs/nodeclub/wiki/%E5%90%8D%E4%BA%BA%E5%A0%82" target="_blank" rel="noopener noreferrer">https://github.com/cnodejs/nodeclub/wiki/名人堂</a></p>
                                <h2>Node.js 服务器</h2>
                                <p>新手搭建 Node.js 服务器，推荐使用无需备案的 <a href="https://www.digitalocean.com/?refcode=eba02656eeb3" target="_blank" rel="noopener noreferrer">DigitalOcean(https://www.digitalocean.com/)</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Getstart.propTypes = {
    state: PropTypes.object,
    match: PropTypes.object,
}

export default connect(
    state => {return {...state.app}},
    dispatch => bindActionCreators({...app}, dispatch)
)(Getstart)
