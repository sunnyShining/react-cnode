/**
 * @author sunny
 * @email 17765293970@163.com
 * @create date 2017-11-17 09:53:36
 * @modify date 2017-11-17 09:53:36
 * @desc 路由
*/

import React from 'react';
import { Route, Switch, routerRedux, Redirect } from 'dva/router';
import dynamic from 'dva/dynamic';
import App from './routes/App/App.jsx';

const { ConnectedRouter } = routerRedux;

function RouterConfig({ history, app }) {
	const error = dynamic({
		app,
		component: () => import('./routes/Error/Error.jsx'),
	});
	const routes = [
	    {
            path: '/index',
		    models: () => [import('./models/index.js')],
	        component: () => import('./routes/Index/Index.jsx'),
	    },
	];
    return (
      <ConnectedRouter history={history}>
        <App>
          <Switch>
            <Route exact path="/" render={() => (<Redirect to="/index" />)} />
            {
            	routes.map(({ path, ...dynamics }, key) => (
              		<Route key={key}
                	exact
                	path={path}
                	component={dynamic({
                 		app,
                  		...dynamics,
                	})}
              		/>
            	))
          	}
            <Route component={error} />
          </Switch>
        </App>
      </ConnectedRouter>
    );
}

export default RouterConfig;
