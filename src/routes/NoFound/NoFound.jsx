/**
 * @author sunny
 * @email 17765293970@163.com
 * @create date 2018-01-27 10:18:39
 * @modify date 2018-01-27 10:18:39
 * @desc 未找到页面
*/

import React, { Component } from 'react';
import './NoFound.less';

export default class Test1 extends Component {
	componentWillMount() {
		let { history } = this.props;
		setTimeout(() => {
			history.replace('/home');
		}, 1000);
    }
	 render() {
		return (
		  	<div className="panel">
				<div className="error">
					<h1>404<br/>Not Found</h1>
				</div>
			</div>
		);
	}
}
