/**
 * @author sunny
 * @email 17765293970@163.com
 * @create date 2017-11-17 09:59:30
 * @modify date 2017-11-17 09:59:30
 * @desc 404页面
*/

import React, { Component } from 'react';
import { Icon } from 'antd';
import './Error.less';

export default class Error extends Component {
	render() {
		return (
  			<div className="content-inner">
    			<div className="error">
      				<Icon type="frown-o" />
      				<h1>404 Not Found</h1>
    			</div>
  			</div>
		);
	}
}
