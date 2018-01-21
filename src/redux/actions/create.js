import services from '../../services/services';
const CREATE_TOPICS = 'CREATE_TOPICS';

export let createTopics = (options = {}) => async (dispatch, getState) => {
	let data = await services.newTopics(options) || {};
	dispatch({
        type: CREATE_TOPICS,
        payload: {
            status: data
        }
    });
}
