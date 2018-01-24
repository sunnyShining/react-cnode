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
        default:
            return state
    }
}