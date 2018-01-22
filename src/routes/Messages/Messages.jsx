import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
// import classnames from 'classnames';
import * as messages from '../../redux/actions/messages';
import * as app from '../../redux/actions/app';

class Messages extends Component {
    componentWillMount = async () => {
        let { getMessage, accesstoken, markAll } = this.props;
        await getMessage({
            accesstoken,
            mdrender: true
        });
        markAll({
            accesstoken
        });
    }
    componentWillUnmount = () => {
        const { getMessageCount, accesstoken } = this.props;
        getMessageCount({
            accesstoken,
        });
    }
    render() {
        const { hasRead, hasnotRead } = this.props;
        return (
            <div>
                <div className="panel">
                    <div className="header">
                        <ul className="breadcrumb">
                            <li><Link to="/home">主页</Link><span className="divider">/</span></li>
                            <li className="active">新消息</li>
                        </ul>
                    </div>
                    {
                        hasnotRead.length === 0 ?
                        <div className="inner">
                            <p>无消息</p>
                        </div> : hasnotRead.map((item, index) => {
                            return (
                                <div className="cell" message_id={item.id} key={index}>
                                    <span>
                                        <Link to={`/user/${item.author && item.author.loginname}`}>{item.author && item.author.loginname}</Link>
                                        回复了你的话题
                                        <Link to={`/topic/${item.topic && item.topic.id}`}>{item.topic && item.topic.title}</Link>
                                    </span>
                                </div>
                            );
                        })

                    }
                </div>
                <div className="panel">
                    <div className="header">
                        <span className="col_fade">过往信息</span>
                    </div>
                    {
                        hasRead.length === 0 ?
                        <div className="inner">
                            <p>无消息</p>
                        </div> : hasRead.map((item, index) => {
                            return (
                                <div className="cell" message_id={item.id} key={index}>
                                    <span>
                                        <Link to={`/user/${item.author && item.author.loginname}`}>{item.author && item.author.loginname}</Link>
                                        回复了你的话题
                                        <Link to={`/topic/${item.topic && item.topic.id}`}>{item.topic && item.topic.title}</Link>
                                    </span>
                                </div>
                            );

                        })
                    }
                </div>
            </div>
        );
    }
}

Messages.propTypes = {
    state: PropTypes.object,
}

export default connect(
    state => {return {...state.messages, ...state.app}},
    dispatch => bindActionCreators({...messages, ...app}, dispatch)
)(Messages)
