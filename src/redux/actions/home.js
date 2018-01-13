import services from '../../services/services';
const GET_TOPICS = 'GET_TOPICS';


export let fetchTopics = (options = {}) => async (dispatch, getState) => {
		let data = await services.topics(options) || {data: []};
		// services.topics(options).then((data) => {
		// 	console.log(data);
		// }, error => {
		// 	console.log(error);
		// });
		console.log(data.data);
		dispatch({
	        type: GET_TOPICS,
	        payload: {
	            topics: data.data
	        }
	    });
		// return ({
		// 	type: GET_TOPICS,
		// 	topics: data.data,
		// });
	}
