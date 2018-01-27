/**
 * @author sunny
 * @email 17765293970@163.com
 * @create date 2018-01-27 10:18:39
 * @modify date 2018-01-27 10:18:39
 * @desc 主题
*/

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
