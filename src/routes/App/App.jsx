/**
 * @author sunny
 * @email 17765293970@163.com
 * @create date 2017-11-17 09:58:18
 * @modify date 2017-11-17 09:58:18
 * @desc 入口页面
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'dva';
import { Layout, Menu, Breadcrumb, Icon, Spin } from 'antd';
import { withRouter } from 'dva/router';
import './App.less';

const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;

class App extends Component {
    constructor(props) {
		super(props);
		console.log(props);
    }
    render() {
		let { loading } = this.props;
    	return (
      		<div>
				{/* <Spin size="large" tip="Loading..." spinning={loading.global}>*/}
					<Layout>
						<div className="header">
							<div className="logo">
							    <a className="brand" href="/">
      								<img src="//o4j806krb.qnssl.com/public/images/cnodejs_light.svg" alt="logo" />
  								</a>
							</div>
							<div className="search">
                				<input type="search" autoComplete="off" name="" />
            				</div>
            				<div className="tab">
				                <a>首页</a>
				                <a>新手入门</a>
				                <a>API</a>
				                <a>关于</a>
				                <a>注册</a>
				                <a>登录</a>
				            </div>
						</div>
						<Layout>
							<Content className="content">
								<div>{ this.props.children }</div>
							</Content>
							<Sider className="sider">Sider</Sider>
						</Layout>
						<Footer className="footer">Footer</Footer>
					</Layout>
				{/* </Spin>*/}
      		</div>
      );
    }
}


App.propTypes = {
  children: PropTypes.element.isRequired,
  // location: PropTypes.object,
  // dispatch: PropTypes.func,
  // app: PropTypes.object,
  loading: PropTypes.object,
};

export default withRouter(connect(({ app, loading }) => ({ app, loading }))(App));
