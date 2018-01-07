/**
 * @author sunny
 * @email 17765293970@163.com
 * @create date 2017-11-17 09:57:38
 * @modify date 2017-11-17 09:57:38
 * @desc 入口redux
*/

export default {
    namespace: 'app',
    state: {},
    subscriptions: {
        setup({ dispatch, history }) {  // eslint-disable-line
        },
    },

    effects: {
        *fetch({ payload }, { call, put }) {  // eslint-disable-line
            yield put({ type: 'save' });
        },
    },
    reducers: {
        save(state, action) {
            return { ...state, ...action.payload };
        },
    },
};
