/**
 * @author sunny
 * @email 17765293970@163.com
 * @create date 2017-11-17 09:55:57
 * @modify date 2017-11-17 09:55:57
 * @desc 入口文件
*/

import 'babel-polyfill';
import dva from 'dva';
import { message } from 'antd';
import createLoading from 'dva-loading'; // 引入loading
import createHistory from 'history/createBrowserHistory';
import flexible from 'flexible'; // 引入flexible.js
import './assets/css/reset.css';
import './assets/css/bootstrap.min.css';
import './assets/css/style.less';

// 1. Initialize
const app = dva({
    ...createLoading(),
    history: createHistory(),
    onError(error) {
    	// 弹出全局的错误信息
		message.error(error.message || error.msg);
	},
});

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/app.js'));

// 4. Router
app.router(require('./router.jsx'));

// 5. Start
app.start('#root');
