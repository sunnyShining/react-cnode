import services from '../../services/services';
const CHANGE_ACCESS = 'CHANGE_ACCESS';
const GET_ACCESS = 'GET_ACCESS';
const GET_INFO = 'GET_INFO';
const AUTHORORINFO = 'AUTHORORINFO';

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

export let getInfo = (options = {}) => async (dispatch, getState) => {
	let data = await services.user(options) || {data: {}};
	dispatch({
        type: GET_INFO,
        payload: {
            info: data.data,
        },
    });
}
export let authorOrInfo = (options = {}) => (dispatch, getState) => {
    dispatch({
        type: AUTHORORINFO,
        payload: {
            isAuthor: options.isAuthor,
        },
    });
}