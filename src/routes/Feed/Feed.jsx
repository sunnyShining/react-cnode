import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import * as feed from '../../redux/actions/feed';

class Feed extends Component {
    render() {
        return (
            <div className="panel">
             Topic
            </div>
        );
    }
}

Feed.propTypes = {
    state: PropTypes.object,
}

export default connect(
    state => {return {...state.feed}},
    dispatch => bindActionCreators(feed, dispatch)
)(Feed)
