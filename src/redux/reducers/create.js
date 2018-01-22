import initData from '../store/initdata';

export const create = (state = initData.create, action) => {
    switch (action.type) {
        case 'CREATE_TOPICS':
            return {
                ...state,
                status: action.payload.status
            };
        case 'GET_TOPIC':
            return {
                ...state,
                topic: action.payload.topic
            }
        case 'UPDATE_TOPIC':
            return {
                ...state,
                updateStatus: action.payload.updateStatus
            }
        default:
            return state;
    }
}