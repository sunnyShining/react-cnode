/**
 * @author sunny
 * @email 17765293970@163.com
 * @create date 2017-11-17 09:57:09
 * @modify date 2017-11-17 09:57:09
 * @desc index页面redux
*/

import services from '../services/services.js';

export default {
	namespace: 'indexPage',
	state: {
		users: [],
	},
    // 订阅事件
	subscriptions: {
        // 开始初始化时执行
		setup({ dispatch, history }) {
			dispatch({
                type: 'fetchUsers',
                payload: {
                    name: 'sunnylovesnow',
                },
            }); // 执行effects里actions
		},
	},

	effects: {
		* fetchUsers({ payload }, { call, put }) {
			const data = yield call(services.users, payload); // 请求数据
			yield put(
				{
					type: 'save',
					payload: {
						users: data, // 存数据
					},
				}); // 触发reducers save函数
		},
	},
	reducers: {
		save(state, action) {
			return { ...state, ...action.payload }; // 存数据
		},
		fetchUsers(state, action) {
			return { ...state, ...action.payload };
		},
	},
};
