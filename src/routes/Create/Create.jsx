import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LzEditor from 'react-lz-editor';
import * as create from '../../redux/actions/create';
import * as app from '../../redux/actions/app';

class Create extends Component {
    constructor(props) {
        super(props);
        this.state = {
            markdownContent: ''
        };
    }
    componentWillMount = () => {
        this.changeSider();
    }
    changeSider = () => {
        const { getInfo, authorOrInfo, accessInfo } = this.props;
        authorOrInfo({
            isAuthor: false,
        });
        if (accessInfo && accessInfo.loginname !== '') {
            getInfo({
                username: accessInfo.loginname
            });
        }
    }
    receiveMarkdown = (content) => {
        this.setState({
            markdownContent: content
        });
    }
    create = async () => {
        const { accesstoken, createTopics } = this.props;
        const { markdownContent } = this.state;
        let titleD = this.refs.title;
        let title = titleD.value;
        let tab = this.refs.tab && this.refs.tab.value;
        let options = {
            title,
            accesstoken,
            tab, // 写死dev避免污染日常板块
            content: markdownContent
        };
        console.log(tab)
        await createTopics(options);
        window.location.reload();
    }
    render() {
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
                                <textarea autoFocus="" className="span9" ref="title" name="title" rows="1" placeholder="标题字数 10 字以上"></textarea>
                                <div className="markdown_editor in_editor">
                                    <div className="markdown_in_editor">
                                        <LzEditor
                                          active={true}
                                          importContent=""
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
}
export default connect(
    state => {return {...state.app}},
    dispatch => bindActionCreators({...create, ...app}, dispatch)
)(Create)
