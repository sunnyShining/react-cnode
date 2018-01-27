/**
 * @author sunny
 * @email 17765293970@163.com
 * @create date 2018-01-27 10:18:39
 * @modify date 2018-01-27 10:18:39
 * @desc 用户
*/

import initData from '../store/initdata';

export const user = (state = initData.user, action) => {
    switch (action.type) {
        case 'GET_USER':
            return {
                ...state,
                userInfo: action.payload.userInfo
            };
        case 'GET_COLLECT':
        	return {
                ...state,
                collect: action.payload.collect
            };
        case 'GET_RECENT':
            return {
                ...state,
                recentTopics: action.payload.recentTopics,
                recentReplies: action.payload.recentReplies,
            };
        default:
            return state
    }
}