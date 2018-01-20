import services from '../../services/services';
const CHANGE_ACCESS = 'CHANGE_ACCESS';
const GET_ACCESS = 'GET_ACCESS';
const GET_USER = 'GET_USER';

export let changeAccesstoken = (options = {}) => (dispatch, getState) => {
    dispatch({
        type: CHANGE_ACCESS,
        payload: {
            accesstoken: options.accesstoken
        }
    });
}

export let getAccess = (options = {}) => async (dispatch, getState) => {
	let data = await services.accesstoken(options) || {};
	dispatch({
        type: GET_ACCESS,
        payload: {
            accessInfo: data
        }
    });
}

export let getUser = (options = {}) => async (dispatch, getState) => {
	let data = await services.user(options) || {data: {}};
	dispatch({
        type: GET_USER,
        payload: {
            userInfo: data.data,
        },
    });
}