import services from '../../services/services';
const GET_TOPICS = 'GET_TOPICS';


export let fetchTopics = (options = {}) => async (dispatch, getState) => {
	let data = await services.topics(options);
	dispatch({
        type: GET_TOPICS,
        payload: {
            topics: data.data || []
        }
    });
}
