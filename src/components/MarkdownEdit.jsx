/**
 * @author sunny
 * @email 17765293970@163.com
 * @create date 2018-01-08 22:27:30
 * @modify date 2018-01-08 22:27:30
 * @desc 头部
*/

import React, { Component } from 'react';
import { convertToRaw, EditorState, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToMarkdown from 'draftjs-to-markdown';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

export default class MarkdownEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState: undefined,
            btnValue: '提交'
        }
    }
    componentWillMount = () => {
        let { btnValue, plainText } = this.props;
        const content = ContentState.createFromText(plainText || '');
        this.setState({
            editorState: EditorState.createWithContent(content, null),
            btnValue,
        });
    }
    onEditorStateChange = (editorState) => {
        this.setState({
            editorState,
        });
    }
    reply = () => {
        let { editorState } = this.state;
        let content = '';
        if (editorState) {
            content = draftToMarkdown(convertToRaw(editorState.getCurrentContent()));
        }
        let { submitCallBack } = this.props;
        submitCallBack && submitCallBack(content);
    }
    componentWillReceiveProps = () => {
        let { status, plainText } = this.props;
        if (status){
            this.setState({
                editorState: EditorState.createEmpty(),
            });
        }
        if (plainText) {
            const content = ContentState.createFromText(plainText || '');
            this.setState({
                editorState: EditorState.createWithContent(content, null),
            });
        }
    }
	render() {
        let { editorState, btnValue } = this.state;
        return (
            <div>
                <Editor
                    editorState={editorState}
                    wrapperClassName="wrapper-area"
                    editorClassName="editor-area"
                    onEditorStateChange={(val) => this.onEditorStateChange(val)}
                />
                <div className="editor_buttons">
                    <input type="button" className="span-primary submit_btn" value={btnValue} onClick={() => {this.reply()}} />
                </div>
            </div>
        );
	}
}
