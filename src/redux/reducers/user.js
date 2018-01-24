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