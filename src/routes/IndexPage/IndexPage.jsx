/**
 * @author sunny
 * @email 17765293970@163.com
 * @create date 2017-11-17 09:59:06
 * @modify date 2017-11-17 09:59:06
 * @desc index页面
*/

import React, { Component } from 'react';
import { connect } from 'dva';
import PropTypes from 'prop-types';
import { Button, Menu, Icon } from 'antd';
import services from '../../services/services.js';
import './IndexPage.less';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class IndexPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			current: 'mail',
		};
	}
    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }
    testMock = () => {
        services.users().then((data) => {
            console.log(data);
            for (let i = 0; i < data.data.length; i += 1) {
                console.log(i);
            }
        }, error => {
            console.log(error);
        });
    }
    render() {
		// console.log(this.props.indexPage);
        return (
            <div>
                <Button type="primary" onClick={this.testMock}>测试mock数据</Button>
                <Button>Default</Button>
                <Button type="dashed">Dashed</Button>
                <Button type="danger">Danger</Button>
            </div>
        );
    }
}

IndexPage.propTypes = {
	indexPage: PropTypes.object,
};

export default connect(({ indexPage, loading }) => ({ indexPage, loading }))(IndexPage);
