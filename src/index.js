import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './assets/libs/flexible';
import './assets/css/reset.css';
import './assets/css/bootstrap.min.css';
import './assets/css/style.less';
import './assets/css/responsive.css';
import './assets/css/font-awesome.less';
import App from './routes/App/App.jsx';
import registerServiceWorker from './utils/registerServiceWorker';
import store from './redux/store/index';

ReactDOM.render(
	<Provider store={ store }>
		<App />
	</Provider>,
	document.getElementById('root'));
registerServiceWorker();
