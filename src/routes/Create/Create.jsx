import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LzEditor from 'react-lz-editor';
import * as create from '../../redux/actions/create';
import * as app from '../../redux/actions/app';
import Toast from '../../components/Toast/index';

class Create extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: '',
            markdownContent: ''
        };
        console.log(333, props);
    }
    componentWillMount = async () => {
        let id = this.props.match.params.id;
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
    receiveMarkdown = (content) => {
        this.setState({
            content: content
        });
    }
    create = async () => {
        const { accesstoken, createTopics, updateTopics } = this.props;
        const { content } = this.state;
        let titleD = this.refs.title;
        let title = titleD.value;
        let tab = this.refs.tab && this.refs.tab.value;
        let options = {
            title,
            accesstoken,
            tab,
            content
        };
        if (tab === '') {
            Toast.info('请选择版块！')
        }
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
                history.push('/home');
                Toast.info('更新成功！');
            }
        }
    }
    render() {
        let { markdownContent } = this.props;
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
                                        <LzEditor
                                          active={true}
                                          importContent={markdownContent}
                                          cbReceiver={this.receiveMarkdown}
                                          image={false}
                                          video={false}
                                          audio={false}
                                          convertFormat="markdown"/>
                                        <div className="editor_buttons">
                                            <input type="button" className="span-primary submit_btn" value="提交" onClick={() => {this.create()}} />
                                        </div>
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
