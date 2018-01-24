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