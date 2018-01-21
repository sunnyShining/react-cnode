import initData from '../store/initdata';

export const create = (state = initData.create, action) => {
    switch (action.type) {
        case "CREATE_TOPICS":
            return {
                ...state,
                status: action.payload.status
            };
        default:
            return state;
    }
}