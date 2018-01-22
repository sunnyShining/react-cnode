import initData from '../store/initdata';

export const messages = (state = initData.messages, action) => {
    switch (action.type) {
        case "GET_MESSAGE":
            return {
                ...state,
                hasRead: action.payload.hasRead,
                hasnotRead: action.payload.hasnotRead
            }
        default:
            return state
    }
}