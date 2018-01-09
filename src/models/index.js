/**
 * @author sunny
 * @email 17765293970@163.com
 * @create date 2018-01-09 22:57:09
 * @modify date 2018-01-09 22:57:09
 * @desc index页面redux
*/

import services from '../services/services.js';

export default {
	namespace: 'index',
	state: {
		topics: [],
	},
    // 订阅事件
	subscriptions: {
        // 开始初始化时执行
		setup({ dispatch, history }) {
			dispatch({
                type: 'fetchTopics',
                payload: {
                	page: 1,
                	tab: 'all',
                	limit: 40,
                    mdrender: true,
                },
            }); // 执行effects里actions
		},
	},

	effects: {
		* fetchTopics({ payload }, { call, put }) {
			const data = yield call(services.topics, payload); // 请求数据
			yield put(
				{
					type: 'save',
					payload: {
						topics: data.data || [], // 存数据
					},
				}); // 触发reducers save函数
		},
	},
	reducers: {
		save(state, action) {
			return { ...state, ...action.payload }; // 存数据
		},
	},
};
