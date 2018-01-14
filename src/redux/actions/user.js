import services from '../../services/services';
const GET_USER = 'GET_USER';


export let getUser = (options = {}) => async (dispatch, getState) => {
	let data = await services.user(options) || {data: {}};
	dispatch({
        type: GET_USER,
        payload: {
            userInfo: data.data,
        },
    });
}
