/**
 * @author sunny
 * @email 17765293970@163.com
 * @create date 2018-01-27 10:18:39
 * @modify date 2018-01-27 10:18:39
 * @desc 新建主题
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as create from '../../redux/actions/create';
import * as app from '../../redux/actions/app';
import Toast from '../../components/Toast/index';
import MarkdownEdit from '../../components/MarkdownEdit.jsx';

class Create extends Component {
    constructor(props) {
        super(props);
        this.state = {
            markdownContent: '',
            status: false
        };
    }
    componentWillMount = async () => {
        let id = this.props.match.params.id;
        this.changeSider();
        if (id !== 'new') {
            const { fetchTopic, accesstoken } = this.props;
            await fetchTopic({
                id,
                accesstoken,
                mdrender: false
            });
            const { topic } = this.props;
            if (topic) {
                this.refs.tab && (this.refs.tab.value = topic.tab);
                this.refs.title && (this.refs.title.value = topic.title);
                this.setState({
                    markdownContent: topic.content
                });
            }
        }
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
    create = async (content) => {
        const { accesstoken, createTopics, updateTopics } = this.props;
        let titleD = this.refs.title;
        let title = titleD.value;
        let tab = this.refs.tab && this.refs.tab.value;
        let options = {
            title,
            accesstoken,
            tab,
            content
        };
        let id = this.props.match.params.id;
        if (id === 'new') {
            await createTopics(options);
            const { status, history } = this.props;
            if (status.success) {
                history.push('/home');
                Toast.info('发布成功！');
            }
        } else {
            options.topic_id = this.props.match.params.id;
            await updateTopics(options);
            const { updateStatus, history } = this.props;
            if (updateStatus.success) {
                this.setState({
                    status: true
                });
                history.push('/home');
                Toast.info('更新成功！');
            }
        }
    }
    render() {
        let { markdownContent, status } = this.state;
        return (
            <div>
                <div className="panel">
                    <div className="header">
                        <ol className="breadcrumb">
                            <li><a href="/">主页</a><span className="divider">/</span></li>
                            <li className="active">发布话题</li>
                        </ol>
                    </div>
                    <div className="inner post">
                        <form id="create_topic_form">
                            <fieldset>
                                <span className="tab-selector">选择版块：</span>
                                <select name="tab" id="tab-value" ref="tab">
                                    <option value="">请选择</option>
                                    <option value="share">分享</option>
                                    <option value="ask">问答</option>
                                    <option value="job">招聘</option>
                                    <option value="dev">客户端测试</option>
                                </select>
                                <span id="topic_create_warn"></span>
                                <p>
                                    <input type="text" style={{width: '85%'}} autoFocus="" ref="title" name="title" placeholder="标题字数 10 字以上" />
                                </p>
                                <div className="markdown_editor in_editor">
                                    <div className="markdown_in_editor">
                                        <MarkdownEdit btnValue="提交" plainText={markdownContent} status={status} submitCallBack={(content) => {this.create(content)}} />
                                    </div>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

Create.propTypes = {
    state: PropTypes.object,
    match: PropTypes.object,
}
export default connect(
    state => {return {...state.create, ...state.app}},
    dispatch => bindActionCreators({...create, ...app}, dispatch)
)(Create)
