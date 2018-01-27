/**
 * @author sunny
 * @email 17765293970@163.com
 * @create date 2018-01-27 10:18:39
 * @modify date 2018-01-27 10:18:39
 * @desc 用户页面
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import classnames from 'classnames';
import * as user from '../../redux/actions/user';
import * as app from '../../redux/actions/app';
import { fromNow } from '../../utils/utils';

class User extends Component {
    componentWillMount = async () => {
        let name = this.props.match.params.name;
        await this.changeSider(true, false, name);
        this.getUser({username: name});
        this.userCollect({username: name});
    }
    getUser = (options) => {
        const { getUser } = this.props;
        getUser(options);
    }
    userCollect = (options) => {
        const { userCollect } = this.props;
        userCollect(options);
    }
    changeSider = (showInfo, isAuthor, name) => {
        const { getInfo, authorOrInfo } = this.props;
        authorOrInfo({
            isAuthor,
            showInfo,
        });
        if (name) {
            getInfo({
                username: name
            });
        }
    }
    componentWillUnmount = () => {
        const { accessInfo } = this.props;
        this.changeSider(true, false, accessInfo.loginname);
    }
    render() {
        let { userInfo } = this.props;
        let { collect } = this.props;
        let name = this.props.match.params.name;
        return (
            <div>
                <div className="panel">
                    <div className="header">
                        <ul className="breadcrumb">
                            <li><Link to="/home">主页</Link><span className="divider">/</span></li>
                        </ul>
                    </div>
                    <div className="inner userinfo">
                        <div className="user_big_avatar">
                            <img src={userInfo.avatar_url} className="user_avatar" alt={userInfo.loginname} title={userInfo.loginname} />
                        </div>
                        <a className="dark">{userInfo.loginname}</a>
                        <div className="user_profile">
                            <ul className="unstyled">
                                <span className="big">{userInfo.score}</span> 积分
                                <li>
                                    {
                                        collect.length === 0 ? null :
                                        <Link className="dark" to={`/userTopic/${userInfo.loginname}/collections`}>
                                            <span className="big collect-topic-count">{collect.length}</span>个话题收藏
                                        </Link>
                                    }
                                </li>
                                {/*<li>
                                    <i className="fa fa-lg fa-fw fa-home"></i>
                                    <a className="dark" href="http://i5ting.com" target="_blank" rel="noopener noreferrer">http://i5ting.com</a>
                                </li>
                                <li>
                                    <i className="fa fa-lg fa-fw fa-map-marker"></i>
                                    <span className="dark">北京</span>
                                </li>*/}
                                <li>
                                    <i className="fa fa-lg fa-fw fa-github"></i>
                                    <a className="dark" href={`https://github.com/${userInfo.githubUsername}`} target="_blank" rel="noopener noreferrer">
                                        @{userInfo.githubUsername}
                                    </a>
                                </li>
                                {/*<li>
                                    <i className="fa fa-lg fa-fw fa-twitter"></i>
                                    <a className="dark" href="shit微博" target="_blank">shit微博</a>
                                </li>*/}
                            </ul>
                        </div>
                        <p className="col_fade">注册时间 {fromNow(userInfo.create_at)}</p>
                    </div>
                </div>

                <div className="panel">
                    <div className="header">
                        <span className="col_fade">最近创建的话题</span>
                    </div>
                    {
                        userInfo.recent_topics && userInfo.recent_topics.map((item, index) => {
                            if (index < 6) {
                                return (
                                    <div className="cell" key={index}>
                                        <Link className="user_avatar pull-left" to={`/user/${item.author.loginname}`}>
                                            <img src={item.author && item.author.avatar_url} alt="" title={item.author && item.author.loginname} />
                                        </Link>
                                        {/*<span className="reply_count pull-left">
                                            <span className="count_of_replies" title="回复数">
                                                12
                                            </span>
                                            <span className="count_seperator"> / </span>
                                            <span className="count_of_visits" title="点击数">
                                                2188
                                            </span>
                                        </span>*/}
                                        <Link className="last_time pull-right" to={`/topic/${item.id}`}>
                                            {/*<img className="user_small_avatar" src="https://avatars3.githubusercontent.com/u/21081809?v=4&amp;s=120" alt="" />*/}
                                            <span className="last_active_time">{fromNow(item.last_reply_at)}</span>
                                        </Link>
                                        <div className="topic_title_wrapper">
                                            {
                                                (() => {
                                                    if (item.top) {
                                                        return (<span className="put_top">&nbsp;置顶&nbsp;</span>);
                                                    } else if (item.good) {
                                                        return (<span className="put_good">&nbsp;精华&nbsp;</span>);
                                                    } else if (item.tab === 'share') {
                                                        return (<span className="topiclist-tab">&nbsp;分享&nbsp;</span>);
                                                    } else if (item.tab === 'ask') {
                                                        return (<span className="topiclist-tab">&nbsp;问答&nbsp;</span>);
                                                    } else if (item.tab === 'job') {
                                                        return (<span className="topiclist-tab">&nbsp;工作&nbsp;</span>);
                                                    } else if (item.tab === 'dev') {
                                                        return (<span className="topiclist-tab">&nbsp;测试&nbsp;</span>);
                                                    } else {
                                                        return null;
                                                    }
                                                })()
                                            }
                                            <Link className="topic_title" to={`/topic/${item.id}`} title={item.title}>
                                                &nbsp;{item.title}
                                            </Link>
                                        </div>
                                    </div>
                                );
                            } else {
                                return null;
                            }
                        })
                    }
                    {
                        userInfo.recent_topics && userInfo.recent_topics.length === 0 ? null :
                        <div className="cell more">
                            <Link className="dark" to={`/userTopic/${name}/topics`}>查看更多»</Link>
                        </div>
                    }
                </div>

                <div className="panel">
                    <div className="header">
                        <span className="col_fade">最近参与的话题</span>
                    </div>
                    {
                        userInfo.recent_replies && userInfo.recent_replies.map((item, index) => {
                            if (index < 6) {
                                return (
                                    <div className="cell" key={index}>
                                        <Link className="user_avatar pull-left" to={`/topic/${item.id}`}>
                                            <img src={item.author && item.author.avatar_url} alt="" title={item.author && item.author.loginname} />
                                        </Link>
                                        {/*<span className="reply_count pull-left">
                                            <span className="count_of_replies" title="回复数">
                                                12
                                            </span>
                                            <span className="count_seperator"> / </span>
                                            <span className="count_of_visits" title="点击数">
                                                2188
                                            </span>
                                        </span>*/}
                                        <Link className="last_time pull-right" to={`/topic/${item.id}`}>
                                            {/*<img className="user_small_avatar" src="https://avatars3.githubusercontent.com/u/21081809?v=4&amp;s=120" alt="" />*/}
                                            <span className="last_active_time">{fromNow(item.last_reply_at)}</span>
                                        </Link>
                                        <div className="topic_title_wrapper">
                                            {
                                                (() => {
                                                    if (item.top) {
                                                        return (<span className="put_top">置顶&nbsp;</span>);
                                                    } else if (item.good) {
                                                        return (<span className="put_good">精华&nbsp;</span>);
                                                    } else if (item.tab === 'share') {
                                                        return (<span className="topiclist-tab">分享&nbsp;</span>);
                                                    } else if (item.tab === 'ask') {
                                                        return (<span className="topiclist-tab">问答&nbsp;</span>);
                                                    } else if (item.tab === 'job') {
                                                        return (<span className="topiclist-tab">工作&nbsp;</span>);
                                                    } else if (item.tab === 'dev') {
                                                        return (<span className="topiclist-tab">测试&nbsp;</span>);
                                                    } else {
                                                        return null;
                                                    }
                                                })()
                                            }
                                            <Link className="topic_title" to={`/topic/${item.id}`} title={item.title}>
                                                &nbsp;{item.title}
                                            </Link>
                                        </div>
                                    </div>
                                );
                            } else {
                                return null;
                            }
                        })
                    }
                    {
                        userInfo.recent_replies && userInfo.recent_replies.length === 0 ? null :
                        <div className="cell more">
                            <Link className="dark" to={`/userTopic/${name}/replies`}>查看更多»</Link>
                        </div>
                    }
                </div>
            </div>
        );
    }
}

User.propTypes = {
    state: PropTypes.object,
    match: PropTypes.object,
}

export default connect(
    state => {return {...state.user, ...state.app}},
    dispatch => bindActionCreators({...user, ...app}, dispatch)
)(User)
