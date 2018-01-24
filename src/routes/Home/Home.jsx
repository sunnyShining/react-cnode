import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import * as home from '../../redux/actions/home';
import * as app from '../../redux/actions/app';
import { fromNow } from '../../utils/utils';
import Pagination from '../../components/Pagination/Pagination.jsx';

class Home extends Component {
	constructor(props) {
		super(props);
        this.state = {
            currentTag: 'all',
            currentPage: 1,
            total: 589
        };
	}
	componentWillMount = () => {
		let options = {
			page: 1,
        	tab: 'all',
        	limit: 40,
            mdrender: true,
		};
		this.fetchTopics(options);
	}
    changeSider = () => {
        const { getInfo, authorOrInfo, accessInfo } = this.props;
        authorOrInfo({
            isAuthor: false,
        });
        if (accessInfo && accessInfo.loginname !== '' && accessInfo.loginname) {
            getInfo({
                username: accessInfo.loginname
            });
        }
    }
	fetchTopics = async (options) => {
		const { fetchTopics } = this.props;
		await fetchTopics(options);
        this.changeSider();
	}
    changeTag = (tag) => {
        let total;
        switch(tag) {
            case 'all':
                total = 589;
                break;
            case 'good':
                total = 16;
                break;
            case 'share':
                total = 36;
                break;
            case 'ask':
                total = 64;
                break;
            case 'job':
                total = 11;
                break;
            case 'dev':
                total = 30;
                break;
            default:
                break;
        }
        this.setState({
            currentTag: tag,
            currentPage: 1,
            total,
        });
        let options = {
            page: 1,
            tab: tag,
            limit: 40,
            mdrender: true,
        };
        this.fetchTopics(options);
    }
    handlePage = (page) => {
        let { currentTag, currentPage } = this.state;
        if (page !== currentPage){
            let options = {
                page,
                tab: currentTag,
                limit: 40,
                mdrender: true,
            };
            this.fetchTopics(options);
            this.setState({
                currentPage: page,
            });
        }
    }
    render() {
    	let { topics } = this.props;
        let { currentTag, currentPage, total } = this.state;
        return (
            <div className="panel">
                <div className="header">
                    <a onClick={() => this.changeTag('all')} className={classnames('topic-tab', { 'current-tab': currentTag === 'all' })}>全部</a>
                    <a onClick={() => this.changeTag('good')} className={classnames('topic-tab', { 'current-tab': currentTag === 'good' })}>精华</a>
                    <a onClick={() => this.changeTag('share')} className={classnames('topic-tab', { 'current-tab': currentTag === 'share' })}>分享</a>
                    <a onClick={() => this.changeTag('ask')} className={classnames('topic-tab', { 'current-tab': currentTag === 'ask' })}>问答</a>
                    <a onClick={() => this.changeTag('job')} className={classnames('topic-tab', { 'current-tab': currentTag === 'job' })}>招聘</a>
                    <a onClick={() => this.changeTag('dev')} className={classnames('topic-tab', { 'current-tab': currentTag === 'dev' })}>客户端测试</a>
                </div>
                <div className="inner no-padding">
                    <div id="topic_list">
                        {
                            topics && topics.map((item, index) => {
                                return (
                                    <div className="cell" key={index}>
                                        <Link className="user_avatar pull-left" to={`/user/${item.author && item.author.loginname}`}>
                                            <img src={item.author ? item.author.avatar_url : ''} title={item.author ? item.author.loginname : ''} alt="" />
                                        </Link>
                                        <span className="reply_count pull-left">
                                            <span className="count_of_replies" title="回复数">
                                                { item.reply_count }
                                            </span>
                                            <span className="count_seperator"> / </span>
                                            <span className="count_of_visits" title="点击数">
                                                { item.visit_count }
                                            </span>
                                        </span>
                                        <Link className="last_time pull-right" to={`/topic/${item.id}`}>
                                            {/* <img className="user_small_avatar" src="" alt="" /> */}
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
                                                { item.title }
                                            </Link>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                    {topics && topics.length !== 0 ? <Pagination total={total} currentPage={currentPage} handlePage={this.handlePage} /> : null}
                </div>
            </div>
        );
    }
}

Home.propTypes = {
    state: PropTypes.object,
}

export default connect(
    state => {return {...state.home, ...state.app}},
    dispatch => bindActionCreators({...home, ...app}, dispatch)
)(Home)
