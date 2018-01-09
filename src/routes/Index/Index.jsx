/**
 * @author sunny
 * @email 17765293970@163.com
 * @create date 2017-11-17 09:59:06
 * @modify date 2017-11-17 09:59:06
 * @desc index页面
*/

import React, { Component } from 'react';
import { connect } from 'dva';
import PropTypes from 'prop-types';
import { Button, Menu, Icon } from 'antd';
import services from '../../services/services';
import './Index.less';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class IndexPage extends Component {
	constructor(props) {
        console.log(props);
		super(props);
		this.state = {
			current: 'mail',
		};
	}
    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }
    testMock = () => {
        services.topics().then((data) => {
            console.log(data);
            // for (let i = 0; i < data.data.length; i += 1) {
            //     console.log(i);
            // }
        }, error => {
            console.log(error);
        });
    }
    render() {
        let { topics } = this.props.index;
        return (
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
