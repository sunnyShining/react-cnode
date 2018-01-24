import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as app from '../../redux/actions/app';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

class Api extends Component {
    componentWillMount = () => {
        this.changeSider();
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
    render() {
        return (
            <div>
                <div className="panel">
                <div className="header">
                    <ul className="breadcrumb">
                        <li><Link to="/home">主页</Link><span className="divider">/</span></li>
                        <li className="active">API</li>
                    </ul>
                </div>
                <div className="inner topic">
                    <div className="topic_content">
                        <div className="markdown-text">
                            <p>以下 api 路径均以 <strong><a href="https://cnodejs.org/api/v1" target="_blank" rel="noopener noreferrer">https://cnodejs.org/api/v1</a></strong> 为前缀</p>
                            <h3>主题</h3>
                            <h4>get /topics 主题首页</h4>
                            <p>接收 get 参数</p>
                            <ul>
                                <li>page <code>Number</code> 页数</li>
                                <li>tab <code>String</code> 主题分类。目前有 <code>ask</code> <code>share</code> <code>job</code> <code>good</code></li>
                                <li>limit <code>Number</code> 每一页的主题数量</li>
                                <li>mdrender <code>String</code> 当为 <code>false</code> 时，不渲染。默认为 <code>true</code>，渲染出现的所有 markdown 格式文本。</li>
                            </ul>
                            <p>示例：<a href="https://cnodejs.org/api/v1/topics" target="_blank" rel="noopener noreferrer">/api/v1/topics</a></p>
                            <h4>get /topic/:id 主题详情</h4>
                            <p>接收 get 参数</p>
                            <ul>
                                <li>mdrender <code>String</code> 当为 <code>false</code> 时，不渲染。默认为 <code>true</code>，渲染出现的所有 markdown 格式文本。</li>
                                <li>accesstoken <code>String</code> 当需要知道一个主题是否被特定用户收藏以及对应评论是否被特定用户点赞时，才需要带此参数。会影响返回值中的 <code>is_collect</code> 以及 <code>replies</code> 列表中的 <code>is_uped</code> 值。</li>
                            </ul>
                            <p>示例：<a href="https://cnodejs.org/api/v1/topic/5433d5e4e737cbe96dcef312" target="_blank" rel="noopener noreferrer">/api/v1/topic/5433d5e4e737cbe96dcef312</a></p>
                            <h4>post /topics 新建主题</h4>
                            <p>接收 post 参数</p>
                            <ul>
                                <li>accesstoken <code>String</code> 用户的 accessToken</li>
                                <li>title <code>String</code> 标题</li>
                                <li>tab <code>String</code> 目前有 <code>ask</code> <code>share</code> <code>job</code> <code>dev</code>。开发新客户端的同学，请务必将你们的测试帖发在 <code>dev</code> 专区，以免污染日常的版面，否则会进行封号一周处理。</li>
                                <li>content <code>String</code> 主体内容</li>
                            </ul>
                            <p>返回值示例</p>
                            <pre className="prettyprint language-js">
                                <code>
                                    <span className="pun">{'{'}</span>
                                    <span className="pln">success</span>
                                    <span className="pun">:</span>
                                    <span className="pln"> </span>
                                    <span className="kwd">true</span>
                                    <span className="pun">,</span>
                                    <span className="pln"> topic_id</span>
                                    <span className="pun">:</span>
                                    <span className="pln"> </span>
                                    <span className="str">'5433d5e4e737cbe96dcef312'</span>
                                    <span className="pun">}</span>
                                </code>
                            </pre>
                            <h4>post /topics/update 编辑主题</h4>
                            <p>接收 post 参数</p>
                            <ul>
                                <li>accesstoken <code>String</code> 用户的 accessToken</li>
                                <li>topic_id <code>String</code> 主题id</li>
                                <li>title <code>String</code> 标题</li>
                                <li>tab <code>String</code> 目前有 <code>ask</code> <code>share</code> <code>job</code></li>
                                <li>content <code>String</code> 主体内容</li>
                            </ul>
                            <p>返回值示例</p>
                            <pre className="prettyprint language-js">
                                <code>
                                    <span className="pun">{'{'}</span>
                                    <span className="pln">success</span>
                                    <span className="pun">:</span>
                                    <span className="pln"> </span>
                                    <span className="kwd">true</span>
                                    <span className="pun">,</span>
                                    <span className="pln"> topic_id</span>
                                    <span className="pun">:</span>
                                    <span className="pln"> </span>
                                    <span className="str">'5433d5e4e737cbe96dcef312'</span>
                                    <span className="pun">}</span>
                                </code>
                            </pre>
                            <h3>主题收藏</h3>
                            <h4>post /topic_collect/collect 收藏主题</h4>
                            <p>接收 post 参数</p>
                            <ul>
                                <li>accesstoken <code>String</code> 用户的 accessToken</li>
                                <li>topic_id <code>String</code> 主题的id</li>
                            </ul>
                            <p>返回值示例</p>
                            <pre className="prettyprint language-js">
                                <code>
                                    <span className="pun">{'{'}</span>
                                    <span className="str">"success"</span>
                                    <span className="pun">:</span>
                                    <span className="pln"> </span>
                                    <span className="kwd">true</span>
                                    <span className="pun">}</span>
                                </code>
                            </pre>
                            <h4>post /topic_collect/de_collect 取消主题</h4>
                            <p>接收 post 参数</p>
                            <ul>
                                <li>accesstoken <code>String</code> 用户的 accessToken</li>
                                <li>topic_id <code>String</code> 主题的id</li>
                            </ul>
                            <p>返回值示例</p>
                            <pre className="prettyprint language-js">
                                <code>
                                    <span className="pun">{'{'}</span>
                                    <span className="pln">success</span>
                                    <span className="pun">:</span>
                                    <span className="pln"> </span>
                                    <span className="kwd">true</span>
                                    <span className="pun">}</span>
                                </code>
                            </pre>
                            <h4>get /topic_collect/:loginname 用户所收藏的主题</h4>
                            <p>示例：<a href="https://cnodejs.org/api/v1/topic_collect/alsotang" target="_blank" rel="noopener noreferrer">/api/v1/topic_collect/alsotang</a></p>
                            <h3>评论</h3>
                            <h4>post /topic/:topic_id/replies 新建评论</h4>
                            <p>接收 post 参数</p>
                            <ul>
                                <li>accesstoken <code>String</code> 用户的 accessToken</li>
                                <li>content <code>String</code> 评论的主体</li>
                                <li>reply_id <code>String</code> 如果这个评论是对另一个评论的回复，请务必带上此字段。这样前端就可以构建出评论线索图。</li>
                            </ul>
                            <p>返回值示例</p>
                            <pre className="prettyprint language-js">
                                <code>
                                    <span className="pun">{'{'}</span>
                                    <span className="pln">success</span>
                                    <span className="pun">:</span>
                                    <span className="pln"> </span>
                                    <span className="kwd">true</span>
                                    <span className="pun">,</span>
                                    <span className="pln"> reply_id</span>
                                    <span className="pun">:</span>
                                    <span className="pln"> </span>
                                    <span className="str">'5433d5e4e737cbe96dcef312'</span>
                                    <span className="pun">}</span>
                                </code>
                            </pre>
                            <h4>post /reply/:reply_id/ups 为评论点赞</h4>
                            <p>接受 post 参数</p>
                            <ul>
                                <li>accesstoken <code>String</code></li>
                            </ul>
                            <p>接口会自动判断用户是否已点赞，如果否，则点赞；如果是，则取消点赞。点赞的动作反应在返回数据的 <code>action</code> 字段中，<code>up</code> or <code>down</code>。</p>
                            <p>返回值示例</p>
                            <pre className="prettyprint language-js">
                                <code>
                                    <span className="pun">{'{'}</span>
                                    <span className="str">"success"</span>
                                    <span className="pun">:</span>
                                    <span className="pln"> </span>
                                    <span className="kwd">true</span>
                                    <span className="pun">,</span>
                                    <span className="pln"> </span>
                                    <span className="str">"action"</span>
                                    <span className="pun">:</span>
                                    <span className="pln"> </span>
                                    <span className="str">"down"</span>
                                    <span className="pun">}</span>
                                </code>
                            </pre>
                            <h3>用户</h3>
                            <h4>get /user/:loginname 用户详情</h4>
                            <p>示例：<a href="https://cnodejs.org/api/v1/user/alsotang" target="_blank" rel="noopener noreferrer">/api/v1/user/alsotang</a></p>
                            <h4>post /accesstoken 验证 accessToken 的正确性</h4>
                            <p>接收 post 参数</p>
                            <ul>
                                <li>accesstoken <code>String</code> 用户的 accessToken</li>
                            </ul>
                            <p>如果成功匹配上用户，返回成功信息。否则 403。</p>
                            <p>返回值示例</p>
                            <pre className="prettyprint language-js">
                                <code>
                                    <span className="pun">{'{'}</span>
                                        <span className="pln">success</span>
                                        <span className="pun">:</span>
                                        <span className="pln"> </span>
                                        <span className="kwd">true</span>
                                        <span className="pun">,</span>
                                        <span className="pln"> loginname</span>
                                        <span className="pun">:</span>
                                        <span className="pln"> req</span>
                                        <span className="pun">.</span>
                                        <span className="pln">user</span>
                                        <span className="pun">.</span>
                                        <span className="pln">loginname</span>
                                        <span className="pun">,</span>
                                        <span className="pln"> id</span>
                                        <span className="pun">:</span>
                                        <span className="pln"> req</span>
                                        <span className="pun">.</span>
                                        <span className="pln">user</span>
                                        <span className="pun">.</span>
                                        <span className="pln">id</span>
                                        <span className="pun">,</span>
                                        <span className="pln"> avatar_url</span>
                                        <span className="pun">:</span>
                                        <span className="pln"> req</span>
                                        <span className="pun">.</span>
                                        <span className="pln">user</span>
                                        <span className="pun">.</span>
                                        <span className="pln">avatar_url</span>
                                        <span className="pun">}</span>
                                </code>
                            </pre>
                            <h3>消息通知</h3>
                            <h4>get /message/count 获取未读消息数</h4>
                            <p>接收 get 参数</p>
                            <ul>
                                <li>accesstoken <code>String</code></li>
                            </ul>
                            <p>返回值示例</p>
                            <pre className="prettyprint language-js">
                                <code>
                                    <span className="pun">{'{'}</span>
                                    <span className="pln"> data</span>
                                    <span className="pun">:</span>
                                    <span className="pln"> </span>
                                    <span className="lit">3</span>
                                    <span className="pln"> </span>
                                    <span className="pun">}</span>
                                </code>
                            </pre>
                            <h4>get /messages 获取已读和未读消息</h4>
                            <p>接收 get 参数</p>
                            <ul>
                                <li>accesstoken <code>String</code></li>
                                <li>mdrender <code>String</code> 当为 <code>false</code> 时，不渲染。默认为 <code>true</code>，渲染出现的所有 markdown 格式文本。</li>
                            </ul>
                            <p>返回值示例</p>
                            <pre className="prettyprint language-js">
                                <code>
                                    <span className="pun">{'{'}</span>
                                    <br />
                                    <span className="pln">&nbsp;data</span>
                                    <span className="pun">:</span>
                                    <span className="pln"> </span>
                                    <span className="pun">{'{'}</span>
                                    <br />
                                    <span className="pln">&nbsp;&nbsp;has_read_messages</span>
                                    <span className="pun">:</span>
                                    <span className="pln"> </span>
                                    <span className="pun">[],</span>
                                    <br />
                                    <span className="pln">&nbsp;&nbsp;hasnot_read_messages</span>
                                    <span className="pun">:</span>
                                    <span className="pln"> </span>
                                    <span className="pun">[</span>
                                    <span className="pln"></span>
                                    <br />
                                    <span className="pun">&nbsp;&nbsp;&nbsp;{'{'}</span>
                                    <br />
                                    <span className="pln">&nbsp;&nbsp;&nbsp;&nbsp;id</span>
                                    <span className="pun">:</span>
                                    <span className="pln"> </span>
                                    <span className="str">"543fb7abae523bbc80412b26"</span>
                                    <span className="pun">,</span>
                                    <br />
                                    <span className="pln">&nbsp;&nbsp;&nbsp;&nbsp;type</span>
                                    <span className="pun">:</span>
                                    <span className="pln"> </span>
                                    <span className="str">"at"</span>
                                    <span className="pun">,</span>
                                    <br />
                                    <span className="pln">&nbsp;&nbsp;&nbsp;&nbsp;has_read</span>
                                    <span className="pun">:</span>
                                    <span className="pln"> </span>
                                    <span className="kwd">false</span>
                                    <span className="pun">,</span>
                                    <br />
                                    <span className="pln">&nbsp;&nbsp;&nbsp;&nbsp;author</span>
                                    <span className="pun">:</span>
                                    <span className="pln"> </span>
                                    <span className="pun">{'{'}</span>
                                    <br />
                                    <span className="pln">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;loginname</span>
                                    <span className="pun">:</span>
                                    <span className="pln"> </span>
                                    <span className="str">"alsotang"</span>
                                    <span className="pun">,</span>
                                    <br />
                                    <span className="pln">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;avatar_url</span>
                                    <span className="pun">:</span>
                                    <span className="pln"> </span>
                                    <span className="str">"https://avatars.githubusercontent.com/u/1147375?v=2"</span>
                                    <span className="pln"></span>
                                    <br />
                                    <span className="pun">&nbsp;&nbsp;&nbsp;&nbsp;},</span>
                                    <br />
                                    <span className="pln">&nbsp;&nbsp;&nbsp;&nbsp;topic</span>
                                    <span className="pun">:</span>
                                    <span className="pln"> </span>
                                    <span className="pun">{'{'}</span>
                                    <br />
                                    <span className="pln">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;id</span>
                                    <span className="pun">:</span>
                                    <span className="pln"> </span>
                                    <span className="str">"542d6ecb9ecb3db94b2b3d0f"</span>
                                    <span className="pun">,</span>
                                    <br />
                                    <span className="pln">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;title</span>
                                    <span className="pun">:</span>
                                    <span className="pln"> </span>
                                    <span className="str">"adfadfadfasdf"</span>
                                    <span className="pun">,</span>
                                    <br />
                                    <span className="pln">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;last_reply_at</span>
                                    <span className="pun">:</span>
                                    <span className="pln"> </span>
                                    <span className="str">"2014-10-18T07:47:22.563Z"</span>
                                    <span className="pln"></span>
                                    <br />
                                    <span className="pun">&nbsp;&nbsp;&nbsp;&nbsp;},</span>
                                    <br />
                                    <span className="pln">&nbsp;&nbsp;&nbsp;&nbsp;reply</span>
                                    <span className="pun">:</span>
                                    <span className="pln"> </span>
                                    <span className="pun">{'{'}</span>
                                    <br />
                                    <span className="pln">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;id</span>
                                    <span className="pun">:</span>
                                    <span className="pln"> </span>
                                    <span className="str">"543fb7abae523bbc80412b24"</span>
                                    <span className="pun">,</span>
                                    <br />
                                    <span className="pln">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;content</span>
                                    <span className="pun">:</span>
                                    <span className="pln"> </span>
                                    <span className="str">"[@alsotang](/user/alsotang) 哈哈"</span>
                                    <span className="pun">,</span>
                                    <br />
                                    <span className="pln">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ups</span>
                                    <span className="pun">:</span>
                                    <span className="pln"> </span>
                                    <span className="pun">[</span>
                                    <span className="pln"> </span>
                                    <span className="pun">],</span>
                                    <br />
                                    <span className="pln">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;create_at</span>
                                    <span className="pun">:</span>
                                    <span className="pln"> </span>
                                    <span className="str">"2014-10-16T12:18:51.566Z"</span>
                                    <span className="pln"></span>
                                    <br />
                                    <span className="pun">&nbsp;&nbsp;&nbsp;&nbsp;}</span>
                                    <span className="pln"></span>
                                    <br />
                                    <span className="pun">&nbsp;&nbsp;&nbsp;},</span>
                                    <br />
                                    <span className="pln"></span>
                                    <span className="pun">&nbsp;&nbsp;&nbsp;...</span>
                                    <span className="pln"></span>
                                    <br />
                                    <span className="pun">&nbsp;&nbsp;]</span>
                                    <span className="pln"></span>
                                    <br />
                                    <span className="pun">&nbsp;&nbsp;}</span>
                                    <span className="pln"></span>
                                    <br />
                                    <span className="pun">}</span>
                                </code>
                            </pre>
                            <h4>post /message/mark_all 标记全部已读</h4>
                            <p>接收 post 参数</p>
                            <ul>
                                <li>accesstoken <code>String</code></li>
                            </ul>
                            <p>返回值示例</p>
                            <pre className="prettyprint language-js">
                                <code>
                                    <span className="pun">{'{'}</span>
                                    <span className="pln"> success</span>
                                    <span className="pun">:</span>
                                    <span className="pln"> </span>
                                    <span className="kwd">true</span>
                                    <span className="pun">,</span>
                                    <span className="pln"> marked_msgs</span>
                                    <span className="pun">:</span>
                                    <span className="pln"> </span>
                                    <span className="pun">[</span>
                                    <span className="pln"> </span>
                                    <span className="pun">{'{'}</span>
                                    <span className="pln"> id</span>
                                    <span className="pun">:</span>
                                    <span className="pln"> </span>
                                    <span className="str">'544ce385aeaeb5931556c6f9'</span>
                                    <span className="pln"> </span>
                                    <span className="pun">&nbsp;}</span>
                                    <span className="pln"> </span>
                                    <span className="pun">]</span>
                                    <span className="pln"></span>
                                    <span className="pun">}</span>
                                </code>
                            </pre>
                            <h4>post /message/mark_one/:msg_id 标记单个消息为已读</h4>
                            <p>请求示例：<a href="https://cnodejs.org/message/mark_one/58ec7d39da8344a81eee0c14" target="_blank" rel="noopener noreferrer">/message/mark_one/58ec7d39da8344a81eee0c14</a></p>
                            <p>接收 post 参数</p>
                            <ul>
                                <li>accesstoken <code>String</code></li>
                            </ul>
                            <p>返回值示例</p>
                            <pre className="prettyprint language-js">
                                <code>
                                    <span className="pun">{'{'}</span>
                                    <span className="pln">success</span>
                                    <span className="pun">:</span>
                                    <span className="pln"> </span>
                                    <span className="kwd">true</span>
                                    <span className="pun">,</span>
                                    <span className="pln">&nbsp;marked_msg_id</span>
                                    <span className="pun">:</span>
                                    <span className="pln"> </span>
                                    <span className="str">"58ec7d39da8344a81eee0c14"</span>
                                    <span className="pln"></span>
                                    <span className="pun">}</span>
                                </code>
                            </pre>
                            <h3>知识点</h3>
                            <ol>
                                <li>如何获取 accessToken？用户登录后，在设置页面可以看到自己的 accessToken。建议各移动端应用使用手机扫码的形式登录，验证使用 <code>/accesstoken</code> 接口，登录后长期保存 accessToken。</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

Api.propTypes = {
    state: PropTypes.object,
    match: PropTypes.object,
}

export default connect(
    state => {return {...state.app}},
    dispatch => bindActionCreators({...app}, dispatch)
)(Api)