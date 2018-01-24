import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as user from '../../redux/actions/user';
import * as app from '../../redux/actions/app';
import { fromNow } from '../../utils/utils';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            header: '',
        };
    }
    componentWillMount = async () => {
        let { name, type } = this.props.match.params;
        await this.changeSider(true, false, name);
        switch (type) {
            case 'collections':
                this.userCollect({username: name});
                this.setState({
                    title: `${name} 收藏的话题`,
                    header: `${name} 收藏的话题`
                });
                break;
            case 'topics':
                this.getRecent({username: name});
                this.setState({
                    title: `${name} 的主页`,
                    header: `${name} 创建的话题`
                });
                break;
            case 'replies':
                this.getRecent({username: name});
                this.setState({
                    title: `${name} 的主页`,
                    header: `${name} 参与的话题`
                });
                break;
            default:
                break;
        }
    }
    userCollect = (options) => {
        const { userCollect } = this.props;
        userCollect(options);
    }
    getRecent = (options) => {
        const { getRecent } = this.props;
        getRecent(options);
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
        let { type, name } = this.props.match.params;
        let { title, header } = this.state;
        let { collect, recentTopics, recentReplies } = this.props;
        let topics = [];
        switch (type) {
            case 'collections':
                topics = collect;
                break;
            case 'topics':
                topics = recentTopics || [];
                break;
            case 'replies':
                topics = recentReplies || [];
                break;
            default:
                topics = []
                break;
        }
        return (
            <div>
                <div className="panel">
                    <div className="header">
                        <ul className="breadcrumb">
                            <li><Link to="/home">主页</Link><span className="divider">/</span></li>
                            { title === `${name} 的主页` ?  <li className="active"><Link to={`/user/${name}`}>i5ting的主页</Link></li> : <li class="active">{ title }</li>}
                        </ul>
                    </div>
                </div>
                <div className="panel">
                    <div className="header">{header}</div>
                    <div className="inner no-padding">
                        <div id="topic_list">
                            {
                                topics.length !== 0 ? topics.map((item, index) => {
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
                                }) :
                                <div className="inner padding">
                                    <div className="inner">
                                        <p>无话题</p>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Home.propTypes = {
    state: PropTypes.object,
    match: PropTypes.object,
}

export default connect(
    state => {return {...state.user, ...state.app}},
    dispatch => bindActionCreators({...user, ...app}, dispatch)
)(Home)
