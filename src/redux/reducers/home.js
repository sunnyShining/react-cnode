import initData from '../store/initdata';

export const home = (state = initData.home, action) => {
    switch (action.type) {
        case "GET_TOPICS":
            return {
                ...state,
                topics: action.payload.topics
            }
        default:
            return state
    }
}