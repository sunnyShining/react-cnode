import initData from '../store/initdata';

export const home = (state = initData.user, action) => {
    switch (action.type) {
        case "GET_USER":
            return {
                ...state,
                userInfo: action.payload.userInfo
            }
        default:
            return state
    }
}