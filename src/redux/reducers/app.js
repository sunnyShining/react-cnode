/**
 * @author sunny
 * @email 17765293970@163.com
 * @create date 2018-01-27 10:18:39
 * @modify date 2018-01-27 10:18:39
 * @desc 全局
*/

import initData from '../store/initdata';

export const app = (state = initData.app, action) => {
    switch (action.type) {
        case 'CHANGE_ACCESS':
            return {
                ...state,
                accesstoken: action.payload.accesstoken
            };
        case 'GET_ACCESS':
            return {
                ...state,
                accessInfo: action.payload.accessInfo
            };
        case 'GET_INFO':
            return {
                ...state,
                info: action.payload.info
            };
        case 'AUTHORORINFO':
            return {
                ...state,
                isAuthor: action.payload.isAuthor,
                showInfo: action.payload.showInfo
            };
        case 'GET_MESSAGE_COUNT':
            return {
                ...state,
                count: action.payload.count
            };
        case 'GET_MESSAGE':
            return {
                ...state,
                hasRead: action.payload.hasRead,
                hasnotRead: action.payload.hasnotRead
            }
        default:
            return state;
    }
}