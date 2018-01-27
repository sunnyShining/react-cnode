/**
 * @author sunny
 * @email 17765293970@163.com
 * @create date 2018-01-27 10:18:39
 * @modify date 2018-01-27 10:18:39
 * @desc 测试代码页面
*/

import React, { Component } from 'react';
import { convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToMarkdown from 'draftjs-to-markdown';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

export default class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState: undefined,
        };
    }
    onEditorStateChange = (editorState) => {
        console.log(editorState);
        this.setState({
            editorState,
        });
    }
    render() {
        let { editorState } = this.state;
        return (
            <div className="panel">
                <Editor
                    editorState={editorState}
                    wrapperClassName="wrapper-area"
                    editorClassName="editor-area"
                    onEditorStateChange={(val) => this.onEditorStateChange(val)}
                />
                <div className="editor-area">
                    {editorState && draftToMarkdown(convertToRaw(editorState.getCurrentContent()))}
                </div>
            </div>
        );
    }
}
