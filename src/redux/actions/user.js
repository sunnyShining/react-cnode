import services from '../../services/services';
const GET_USER = 'GET_USER';
const GET_COLLECT = 'GET_COLLECT';


export let getUser = (options = {}) => async (dispatch, getState) => {
	let data = await services.user(options);
	dispatch({
        type: GET_USER,
        payload: {
            userInfo: data.data || {},
        },
    });
}

export let userCollect = (options = {}) => async (dispatch, getState) => {
	let data = await services.userCollect(options);
	dispatch({
        type: GET_COLLECT,
        payload: {
            collect: data.data || [],
        },
    });
}