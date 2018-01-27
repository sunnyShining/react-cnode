/**
 * @author sunny
 * @email 17765293970@163.com
 * @create date 2018-01-27 10:18:39
 * @modify date 2018-01-27 10:18:39
 * @desc 主题详情
*/

import initData from '../store/initdata';

export const topic = (state = initData.topic, action) => {
    switch (action.type) {
        case 'GET_TOPIC':
            return {
                ...state,
                topic: action.payload.topic
            }
        default:
            return state
    }
}