import initData from '../store/initdata';

export const app = (state = initData.app, action) => {
    switch (action.type) {
        case "CHANGE_ACCESS":
            return {
                ...state,
                accesstoken: action.payload.accesstoken
            };
        case "GET_ACCESS":
            return {
                ...state,
                accessInfo: action.payload.accessInfo
            };
        case "GET_INFO":
            return {
                ...state,
                info: action.payload.info
            };
        case "AUTHORORINFO":
            return {
                ...state,
                isAuthor: action.payload.isAuthor
            };
        default:
            return state;
    }
}