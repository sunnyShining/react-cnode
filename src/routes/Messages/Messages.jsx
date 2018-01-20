import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
// import classnames from 'classnames';
import * as messages from '../../redux/actions/messages';

class Messages extends Component {
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
    state => {return {...state.messages}},
    dispatch => bindActionCreators(messages, dispatch)
)(Messages)
