import services from '../../services/services';
const GET_INFO = 'GET_INFO';

export let getUserInfo = (options = {}) => async (dispatch, getState) => {
	let data = await services.accesstoken(options) || {};
	dispatch({
        type: GET_INFO,
        payload: {
            info: data
        }
    });
}