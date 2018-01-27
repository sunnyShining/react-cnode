/**
 * @author sunny
 * @email 17765293970@163.com
 * @create date 2018-01-27 10:18:39
 * @modify date 2018-01-27 10:18:39
 * @desc redux入口
*/

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