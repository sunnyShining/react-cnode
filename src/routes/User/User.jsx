import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
// import classnames from 'classnames';
import * as user from '../../redux/actions/user';
import { fromNow } from '../../utils/utils';

class User extends Component {
    componentWillMount = () => {
        let name = this.props.match.params.name;
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
    render() {
        let { userInfo } = this.props;
        let { collect } = this.props;
        return (
            <div>
                <div className="panel">
                    <div className="header">
                        <ul className="breadcrumb">
                            <li><a href="/">主页</a><span className="divider">/</span></li>
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
                                    <a className="dark" href="/user/i5ting/collections" target="_blank">
                                        <span className="big collect-topic-count">{collect.length}</span>个话题收藏
                                    </a>
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
                    <div className="cell">
                        <a className="user_avatar pull-left" href="/user/i5ting">
                            <img src="https://avatars3.githubusercontent.com/u/3118295?v=4&amp;s=120" alt="" title="i5ting" />
                        </a>
                        <span className="reply_count pull-left">
                            <span className="count_of_replies" title="回复数">
                                12
                            </span>
                            <span className="count_seperator"> / </span>
                            <span className="count_of_visits" title="点击数">
                                2188
                            </span>
                        </span>
                        <a className="last_time pull-right" href="/topic/5a54a8a4afa0a121784a8ab0#5a5b04829d371d4a059eea9c">
                            <img className="user_small_avatar" src="https://avatars3.githubusercontent.com/u/21081809?v=4&amp;s=120" alt="" />
                            <span className="last_active_time">7 小时前</span>
                        </a>
                        <div className="topic_title_wrapper">
                            <span className="put_top">置顶</span>
                            <a className="topic_title" href="/topic/5a54a8a4afa0a121784a8ab0" title="玉伯《从前端技术到体验科技（附演讲视频）》">
                                玉伯《从前端技术到体验科技（附演讲视频）》
                            </a>
                        </div>
                    </div>
                    <div className="cell more">
                        <a className="dark" href="/user/i5ting/topics">查看更多»</a>
                    </div>
                </div>

                <div className="panel">
                    <div className="header">
                        <span className="col_fade">最近参与的话题</span>
                    </div>
                    <div className="cell">
                        <a className="user_avatar pull-left" href="/user/wangchaoduo">
                            <img src="https://avatars0.githubusercontent.com/u/16484068?v=4&amp;s=120" title="wangchaoduo" alt="" />
                        </a>
                        <span className="reply_count pull-left">
                            <span className="count_of_replies" title="回复数">
                                5
                            </span>
                            <span className="count_seperator"> / </span>
                            <span className="count_of_visits" title="点击数">
                                410
                            </span>
                        </span>
                        <a className="last_time pull-right" href="/topic/5a58130da3692d014f4f13ec#5a5857db9d371d4a059eea5c">
                            <img className="user_small_avatar" src="https://avatars0.githubusercontent.com/u/16484068?v=4&amp;s=120" alt="" />
                            <span className="last_active_time">2 天前</span>
                        </a>
                        <div className="topic_title_wrapper">
                            <a className="topic_title" href="/topic/5a58130da3692d014f4f13ec" title="js ==  与 === 性能问题">
                                js ==  与 === 性能问题
                            </a>
                        </div>
                    </div>

                    <div className="cell">
                        <a className="user_avatar pull-left" href="/user/i5ting">
                            <img src="https://avatars3.githubusercontent.com/u/3118295?v=4&amp;s=120" alt="" title="i5ting" />
                        </a>
                        <span className="reply_count pull-left">
                            <span className="count_of_replies" title="回复数">
                                12
                            </span>
                            <span className="count_seperator"> / </span>
                            <span className="count_of_visits" title="点击数">
                                2188
                            </span>
                        </span>
                        <a className="last_time pull-right" href="/topic/5a54a8a4afa0a121784a8ab0#5a5b04829d371d4a059eea9c">
                            <img className="user_small_avatar" src="https://avatars3.githubusercontent.com/u/21081809?v=4&amp;s=120" alt="" />
                            <span className="last_active_time">7 小时前</span>
                        </a>
                        <div className="topic_title_wrapper">
                            <span className="put_top">置顶</span>
                            <a className="topic_title" href="/topic/5a54a8a4afa0a121784a8ab0" title="玉伯《从前端技术到体验科技（附演讲视频）》">
                                玉伯《从前端技术到体验科技（附演讲视频）》
                            </a>
                        </div>
                    </div>
                    <div className="cell more">
                        <a className="dark" href="/user/i5ting/replies">查看更多»</a>
                    </div>
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
    state => {return {...state.user}},
    dispatch => bindActionCreators(user, dispatch)
)(User)
