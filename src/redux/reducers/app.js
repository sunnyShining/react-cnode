import initData from '../store/initdata';

export const app = (state = initData.app, action) => {
    switch (action.type) {
        case "RE_NAME":
            return {
                ...state,
                name: action.name
            }
        default:
            return state
    }
}