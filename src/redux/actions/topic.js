import services from '../../services/services';
const GET_TOPIC = 'GET_TOPIC';

export let fetchTopic = (options = {}) => async (dispatch, getState) => {
	let data = await services.topic(options) || {data: {}};
	dispatch({
        type: GET_TOPIC,
        payload: {
            topic: data.data
        }
    });
}

export let ups = (options = {}) => async (dispatch, getState) => {
	await services.ups(options);
}