import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import * as <%- redux_name %> from '../../redux/actions/<%- redux_name %>';

class <%- routes_name %> extends Component {
    render() {
        return (
            <div className="panel">
             Topic
            </div>
        );
    }
}

<%- routes_name %>.propTypes = {
    state: PropTypes.object,
}

export default connect(
    state => {return {...state.<%- redux_name %>}},
    dispatch => bindActionCreators(<%- redux_name %>, dispatch)
)(<%- routes_name %>)
