import initData from '../store/initdata';

export const messages = (state = initData.messages, action) => {
    switch (action.type) {
        case "ACTION_NAME":
            return {
                ...state,
                messages: action.payload.messages
            }
        default:
            return state
    }
}