import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import * as topic from '../../redux/actions/topic';
import { fromNow } from '../../utils/utils';

class Topic extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }
    componentWillMount = () => {
        let id = this.props.match.params.id;
        this.fetchTopic({id});
    }
    fetchTopic = (options) => {
        const { fetchTopic } = this.props;
        fetchTopic(options);
    }
    ups = async (reply_id) => {
        const { ups, accesstoken } = this.props;
        let options = {
            reply_id,
            accesstoken,
        };
        await ups(options);
        let id = this.props.match.params.id;
        this.fetchTopic({id});
    }
    render() {
        let { topic } = this.props;
        return (
            <div>
                <div className="panel">
                    <div className="header topic_header">
                        <span className="topic_full_title">
                            {
                                (() => {
                                    if (topic.top) {
                                        return (<span className="put_top">置顶&nbsp;</span>);
                                    } else if (topic.good) {
                                        return (<span className="put_good">精华&nbsp;</span>);
                                    } else if (topic.tab === 'share') {
                                        return (<span className="topiclist-tab">分享&nbsp;</span>);
                                    } else if (topic.tab === 'ask') {
                                        return (<span className="topiclist-tab">问答&nbsp;</span>);
                                    } else if (topic.tab === 'job') {
                                        return (<span className="topiclist-tab">工作&nbsp;</span>);
                                    } else if (topic.tab === 'dev') {
                                        return (<span className="topiclist-tab">测试&nbsp;</span>);
                                    } else {
                                        return null;
                                    }
                                })()
                            }
                            {topic.title}
                        </span>
                        <div className="changes">
                            <span>
                              发布于 {fromNow(topic.create_at)}
                            </span>
                            <span>
                              作者 <Link to={`/user/${topic.author && topic.author.loginname}`}>{topic.author && topic.author.loginname}</Link>
                            </span>
                            <span>
                              {topic.visit_count} 次浏览
                            </span>
                            <span> 来自 {
                                (() => {
                                    if (topic.tab === 'share') {
                                        return '分享';
                                    } else if (topic.tab === 'ask') {
                                        return '问答';
                                    } else if (topic.tab === 'job') {
                                        return '工作';
                                    } else if (topic.tab === 'dev') {
                                        return '测试';
                                    } else {
                                        return null;
                                    }
                                })()
                            }</span>
                        </div>
                    </div>
                    <div className="inner topic">
                        <div className="topic_content">
                            <div dangerouslySetInnerHTML={(() => {
                                return {__html: topic.content};
                            })()} />
                        </div>
                    </div>
                </div>
                <div className="panel">
                    <div className="header">
                        <span className="col_fade">{topic.replies && topic.replies.length} 回复</span>
                    </div>
                    {
                        topic.replies ? topic.replies.map((item, index) => {
                            return (
                                <div key={index} className={classnames('cell', 'reply_area', 'reply_item', {'reply_highlight': item.is_uped})} reply_id={item.id} reply_to_id="" id={item.id}>
                                    <div className="author_content">
                                        <Link to={`/user/${item.author && item.author.loginname}`} className="user_avatar">
                                            <img src={item.author.avatar_url} alt="" title="i5ting" />
                                        </Link>
                                        <div className="user_info">
                                            <Link className="dark reply_author" to={`/user/${item.author && item.author.loginname}`}>{item.author.loginname}</Link>
                                            <a className="reply_time" href={`#${item.id}`}>{index+1}楼•{fromNow(item.create_at)}</a>
                                            {item.author.loginname === topic.author.loginname ? <span className="reply_by_author">作者</span> : null}
                                        </div>
                                        <div className="user_action">
                                            <span>
                                                <i className={classnames('fa up_btn fa-thumbs-o-up', {'uped': item.is_uped})} title="喜欢" onClick={() => {this.ups(item.id)}}></i>
                                                <span className="up-count">
                                                  &nbsp;{item.ups ? item.ups.length : 0}
                                                </span>
                                            </span>
                                            <span> </span>
                                        </div>
                                    </div>
                                    <div className="reply_content from-i5ting">
                                        <div dangerouslySetInnerHTML={(() => {
                                            return {__html: item.content};
                                        })()} />
                                    </div>
                                    <div className="clearfix">
                                        <div className="reply2_area">
                                        </div>
                                    </div>
                                </div>
                            );
                        }) : null
                    }
                </div>
            </div>
        );
    }
}

Topic.propTypes = {
    state: PropTypes.object,
    match: PropTypes.object,
}

export default connect(
    state => {return {...state.topic, ...state.app}},
    dispatch => bindActionCreators(topic, dispatch)
)(Topic)
