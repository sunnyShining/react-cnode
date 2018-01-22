import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import * as topic from '../../redux/actions/topic';
import * as app from '../../redux/actions/app';
import { fromNow } from '../../utils/utils';
import Dialog from '../../components/Dialog/index';
import Toast from '../../components/Toast/index';
import LzEditor from 'react-lz-editor';

class Topic extends Component {
    constructor(props){
        super(props);
        this.state = {
            content: '',
            content2: '',
            markdownContent: '',
            markdownContent2: '',
            replyId: '',
        };
    }
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
                    const { accessInfo, changeAccesstoken, getInfo } = self.props;
                    if (accessInfo.success) {
                        changeAccesstoken({
                            accesstoken
                        });
                        getInfo({
                            username: accessInfo.loginname
                        });
                        Dialog.close();
                        Toast.info('登录成功！');
                        window.localStorage.setItem('accesstoken', accesstoken);
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
    componentWillMount = () => {
        let id = this.props.match.params.id;
        const { accesstoken } = this.props;
        this.fetchTopic({
            id,
            accesstoken,
            mdrender: true
        });
    }
    componentWillUnmount = () => {
        const { accessInfo } = this.props;
        this.changeSider(false, accessInfo.loginname);
    }
    changeSider = (isAuthor, name) => {
        const { authorOrInfo, getInfo } = this.props;
        authorOrInfo({
            isAuthor,
        });
        if (name !== '') {
            getInfo({
                username: name
            });
        }
    }
    fetchTopic = async (options) => {
        const { fetchTopic } = this.props;
        await fetchTopic(options);
        const { topic } = this.props;
        // 侧边栏
        this.changeSider(true, topic.author.loginname);
    }
    ups = async (reply_id) => {
        const { ups, accesstoken, accessInfo } = this.props;
        if (accessInfo.success) {
            let options = {
                reply_id,
                accesstoken,
            };
            await ups(options);
            let id = this.props.match.params.id;
            this.fetchTopic({
                id,
                accesstoken,
                mdrender: true
            });
        } else {
            this.signIn();
        }
    }
    reply = (reply_id, loginname) => {
        this.setState({
            replyId: reply_id,
            markdownContent: `@${loginname}`
        });
    }
    reply2 = async (reply_id) => {
        const { content, content2 } = this.state;
        const { accesstoken, replies } = this.props;
        let topicId = this.props.match.params.id;
        let options;
        if (reply_id !== '') {
            options = {
                reply_id,
                accesstoken,
                content,
                topicId,
            };
        } else {
            options = {
                accesstoken,
                content: content2,
                topicId,
            };
        }
        await replies(options);
        this.fetchTopic({
            id: topicId,
            accesstoken,
            mdrender: true
        });
        this.setState({
            markdownContent: '',
            markdownContent2: '',
            replyId: ''
        });
    }
    collect = async () => {
        const id = this.props.match.params.id;
        const { collect, accesstoken } = this.props;
        const options = {
            topic_id: id,
            accesstoken,
        };
        await collect(options);
    }
    decollect = async () => {
        const id = this.props.match.params.id;
        const { deCollect, accesstoken } = this.props;
        const options = {
            topic_id: id,
            accesstoken,
        };
        await deCollect(options);
    }
    receiveMarkdown = (content) => {
        this.setState({
            content: content
        });
    }
    receiveMarkdown2 = (content) => {
        this.setState({
            content2: content
        });
    }
    render() {
        let { topic, accessInfo } = this.props;
        let id = this.props.match.params.id;
        let { replyId, markdownContent, markdownContent2 } = this.state;
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
                            {
                                topic.is_collect ? <input className="span-common  pull-right collect_btn" type="submit" value="取消收藏" action="de_collect" onClick={() => {this.decollect()}} /> : <input className="span-common span-success pull-right collect_btn" type="submit" value="收藏" action="collect" onClick={() => {this.collect()}} />
                            }
                        </div>
                        {
                            topic.author && (topic.author.loginname === accessInfo.loginname) ?
                            <div id="manage_topic">
                                <Link to={`/create/${id}`}>
                                    <i className="fa fa-lg fa-pencil-square-o" title="编辑"></i>
                                </Link>
                            </div> : null
                        }
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
                                            {
                                                accessInfo.success ?
                                                <span>
                                                    &nbsp;<i className="fa fa-reply reply2_btn" title="回复" onClick={() => {this.reply(item.id, item.author.loginname)}}></i>
                                                </span>: null
                                            }
                                        </div>
                                    </div>
                                    <div className="reply_content from-i5ting">
                                        <div dangerouslySetInnerHTML={(() => {
                                            return {__html: item.content};
                                        })()} />
                                    </div>
                                    <div className="clearfix">
                                        <div className="reply2_area">
                                            {
                                                replyId === item.id ?
                                                <div className="markdown_editor in_editor">
                                                    <div className="markdown_in_editor">
                                                        <LzEditor
                                                          active={true}
                                                          importContent={markdownContent}
                                                          cbReceiver={this.receiveMarkdown}
                                                          image={false}
                                                          video={false}
                                                          audio={false}
                                                          convertFormat="markdown"/>
                                                        <div className="editor_buttons">
                                                            <input type="button" className="span-primary submit_btn" value="回复" onClick={() => {this.reply2(item.id)}} />
                                                        </div>
                                                    </div>
                                                </div> : null
                                            }
                                        </div>
                                    </div>
                                </div>
                            );
                        }) : null
                    }
                    {
                        accessInfo.success ?
                        <div className="panel">
                            <div className="header">
                                <span className="col_fade">添加回复</span>
                            </div>
                            <div className="inner reply">
                                <div className="markdown_editor in_editor">
                                    <div className="markdown_in_editor">
                                        <LzEditor
                                          active={true}
                                          importContent={markdownContent2}
                                          cbReceiver={this.receiveMarkdown2}
                                          image={false}
                                          video={false}
                                          audio={false}
                                          convertFormat="markdown"/>
                                        <div className="editor_buttons">
                                            <input type="button" className="span-primary submit_btn" value="回复" onClick={() => {this.reply2('')}} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> : null
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
    dispatch => bindActionCreators({...topic, ...app}, dispatch)
)(Topic)
