import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerReducer } from 'react-router-redux'
import middlewares from './middlewares';
import rootReducer from '../reducers/index'

const store = createStore(
	combineReducers({routing: routerReducer, ...rootReducer}),
	composeWithDevTools(applyMiddleware(...middlewares))
);
export default store;