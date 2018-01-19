import initData from '../store/initdata';

export const app = (state = initData.app, action) => {
    switch (action.type) {
        case "GET_INFO":
            return {
                ...state,
                info: action.payload.info
            }
        default:
            return state
    }
}