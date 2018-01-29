/**
 * @author sunny
 * @email 17765293970@163.com
 * @create date 2018-01-27 10:18:39
 * @modify date 2018-01-27 10:18:39
 * @desc 入口
*/

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './assets/css/reset.css';
import './assets/css/bootstrap.min.css';
import './assets/css/style.less';
import './assets/css/responsive.css';
import './assets/css/font-awesome.less';
import App from './routes/App/App.jsx';
import store from './redux/store/index';
import registerServiceWorker from './utils/registerServiceWorker';

ReactDOM.render(
	<Provider store={ store }>
		<App />
	</Provider>,
	document.getElementById('root'));
registerServiceWorker();
