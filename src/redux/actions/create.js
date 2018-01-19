import services from '../../services/services';

export let createTopics = (options = {}) => async (dispatch, getState) => {
	await services.newTopics(options);
}
