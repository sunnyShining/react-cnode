/**
 * @author sunny
 * @email 17765293970@163.com
 * @create date 2017-11-17 09:58:18
 * @modify date 2017-11-17 09:58:18
 * @desc 入口页面
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'dva';
import { withRouter } from 'dva/router';
import { Header, Sider, Footer } from '../../components/Layout/index';
import './App.less';

class App extends Component {
    constructor(props) {
		super(props);
		console.log(props);
    }
    render() {
		let { loading } = this.props;
    	return (
      		<div>
      			<Header />

							<div id="main">
  								<Sider />
								<div id="content">
								  	<div className="panel">
									    <div className="header">
									        <a href="/?tab=all" className="topic-tab current-tab">全部</a>
									        <a href="/?tab=good" className="topic-tab ">精华</a>
									        <a href="/?tab=share" className="topic-tab ">分享</a>
									        <a href="/?tab=ask" className="topic-tab ">问答</a>
									        <a href="/?tab=job" className="topic-tab ">招聘</a>
									        <a href="/?tab=dev" className="topic-tab ">客户端测试</a>
									    </div>
								    	<div className="inner no-padding">
								      		<div id="topic_list">
								  				<div className="cell">
												  	<a className="user_avatar pull-left" href="/user/atian25">
												    	<img src="https://avatars1.githubusercontent.com/u/227713?v=3&amp;s=120" title="atian25" alt="" />
												  	</a>
													<span className="reply_count pull-left">
													    <span className="count_of_replies" title="回复数">
													      	79
													    </span>
													    <span className="count_seperator"> / </span>
													    <span className="count_of_visits" title="点击数">
													      	10912
													    </span>
													</span>
													<a className="last_time pull-right" href="/topic/5a2403226190c8912ebaceeb#5a52fec3a89c475d7ea4fada">
													    <img className="user_small_avatar" src="https://avatars2.githubusercontent.com/u/6367348?v=4&amp;s=120" alt="" />
													    <span className="last_active_time">8 小时前</span>
													</a>
								  					<div className="topic_title_wrapper">
														<span className="put_top">置顶</span>
													    <a className="topic_title" href="/topic/5a2403226190c8912ebaceeb" title="企业级 Node.js 框架 Egg 发布 2.0，性能提升 30%，拥抱 Async">
													      	企业级 Node.js 框架 Egg 发布 2.0，性能提升 30%，拥抱 Async
													    </a>
								  					</div>
												</div>
												<div className="cell">
												  	<a className="user_avatar pull-left" href="/user/yuelau">
												    	<img src="https://avatars3.githubusercontent.com/u/15322811?v=4&amp;s=120" title="yuelau" alt="" />
												  	</a>
												  	<span className="reply_count pull-left">
													    <span className="count_of_replies" title="回复数">
													      	0
													    </span>
													    <span className="count_seperator"> / </span>
													    <span className="count_of_visits" title="点击数">
													      	216
													    </span>
												  	</span>
												    <span className="last_time pull-right">
												      	<span className="last_active_time">2 天前</span>
												    </span>
												  	<div className="topic_title_wrapper">
														<span className="topiclist-tab">问答</span>
													    <a className="topic_title" href="/topic/5a50e0eba3692d014f4f1278" title="ES6 import &amp; export默认值default的问题">
													      	ES6 import &amp; export默认值default的问题
													    </a>
												  	</div>
												</div>
											</div>
								    	</div>
								  	</div>
								</div>
							</div>
							<div id="backtotop">回到顶部</div>
						    <Footer />
      		</div>
      );
    }
}


App.propTypes = {
  // children: PropTypes.element.isRequired,
  // location: PropTypes.object,
  // dispatch: PropTypes.func,
  // app: PropTypes.object,
  loading: PropTypes.object,
};

export default withRouter(connect(({ app, loading }) => ({ app, loading }))(App));
