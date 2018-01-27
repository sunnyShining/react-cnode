/**
 * @author sunny
 * @email 17765293970@163.com
 * @create date 2018-01-27 10:18:39
 * @modify date 2018-01-27 10:18:39
 * @desc 新建
*/

import initData from '../store/initdata';

export const create = (state = initData.create, action) => {
    switch (action.type) {
        case 'CREATE_TOPICS':
            return {
                ...state,
                status: action.payload.status
            };
        case 'GET_TOPIC':
            return {
                ...state,
                topic: action.payload.topic
            }
        case 'UPDATE_TOPIC':
            return {
                ...state,
                updateStatus: action.payload.updateStatus
            }
        default:
            return state;
    }
}