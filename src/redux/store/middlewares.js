/**
 * @author sunny
 * @email 17765293970@163.com
 * @create date 2018-01-27 10:18:39
 * @modify date 2018-01-27 10:18:39
 * @desc 配置中间件
*/

import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import { createLogger } from 'redux-logger'

const history = createHistory();
const middleware = routerMiddleware(history);

const middlewares = [thunk, middleware];

if (process.env.NODE_ENV === 'development') {
  // Redux日志
  middlewares.push(createLogger());
}

export default middlewares;
