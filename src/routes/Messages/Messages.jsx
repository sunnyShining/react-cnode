import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
// import classnames from 'classnames';
import * as messages from '../../redux/actions/messages';
import * as app from '../../redux/actions/app';

class Messages extends Component {
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
    render() {
        return (
            <div className="panel">
             Messages
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
