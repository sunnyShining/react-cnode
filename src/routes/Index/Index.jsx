/**
 * @author sunny
 * @email 17765293970@163.com
 * @create date 2018-01-10 22:59:06
 * @modify date 2018-01-10 22:59:06
 * @desc index页面
*/

import React, { Component } from 'react';
import { connect } from 'dva';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './Index.less';

class IndexPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentTag: 'all',
		};
	}
    changeTag = (tag) => {
        this.setState({
            currentTag: tag,
        });
    }
    render() {
        let { topics } = this.props.index;
        let { currentTag } = this.state;
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
                            topics.map((item, index) => {
                                return (
                                    <div className="cell" key={index}>
                                        <a className="user_avatar pull-left" href="/user/atian25">
                                            <img src={item.author ? item.author.avatar_url : ''} title={item.author ? item.author.loginname : ''} alt="" />
                                        </a>
                                        <span className="reply_count pull-left">
                                            <span className="count_of_replies" title="回复数">
                                                { item.reply_count }
                                            </span>
                                            <span className="count_seperator"> / </span>
                                            <span className="count_of_visits" title="点击数">
                                                { item.visit_count }
                                            </span>
                                        </span>
                                        <a className="last_time pull-right" href="/topic/5a2403226190c8912ebaceeb#5a52fec3a89c475d7ea4fada">
                                            {/* <img className="user_small_avatar" src="" alt="" /> */}
                                            <span className="last_active_time">8 小时前</span>
                                        </a>
                                        <div className="topic_title_wrapper">
                                            <span className="put_top">置顶</span>&nbsp;
                                            <a className="topic_title" href="/topic/5a2403226190c8912ebaceeb" title={item.title}>
                                                { item.title }
                                            </a>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

IndexPage.propTypes = {
	index: PropTypes.object,
};

export default connect(({ index, loading }) => ({ index, loading }))(IndexPage);
