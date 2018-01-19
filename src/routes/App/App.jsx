import React, { Component } from 'react';
import {
  Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import createHistory from 'history/createHashHistory'
import * as app from '../../redux/actions/app';
import { Header, Sider, Footer } from '../../components/Layout/index';
import Test2 from '../Test2/Test2.jsx';
import NotFound from '../NoFound/NoFound.jsx';
import Home from '../Home/Home.jsx';
import Topic from '../Topic/Topic.jsx';
import User from '../User/User.jsx';
import GetStart from '../GetStart/GetStart.jsx';
import Api from '../Api/Api.jsx';
import About from '../About/About.jsx';
import Create from '../Create/Create.jsx';

const history = createHistory()

class App extends Component {
    render() {
        return (
            <Router history={history}>
                <div>
                    <Header />
                    <div id="main">
                        <Sider />
                        <div id="content">
                            <Switch>
                                <Route exact path="/" render={() => (<Redirect to="/home" />)} />
                                <Route path='/test2'  component={Test2}/>
                                <Route path='/home'  component={Home}/>
                                <Route path='/topic/:id'  component={Topic}/>
                                <Route path='/user/:name'  component={User}/>
                                <Route path='/getstart'  component={GetStart}/>
                                <Route path='/api'  component={Api}/>
                                <Route path='/about'  component={About}/>
                                <Route path='/create' component={Create}/>
                                <Route component={NotFound}/>
                            </Switch>
                        </div>
                    </div>
                    <div id="backtotop">回到顶部</div>
                    <Footer />
                </div>
            </Router>
        );
    }
}

App.propTypes = {
    state: PropTypes.object,
}

export default connect(
    state => {return {...state.app}},
    dispatch => bindActionCreators(app, dispatch)
)(App)
