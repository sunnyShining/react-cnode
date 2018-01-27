/**
 * @author sunny
 * @email 17765293970@163.com
 * @create date 2018-01-27 10:18:39
 * @modify date 2018-01-27 10:18:39
 * @desc 主题详情
*/

import services from '../../services/services';
const GET_TOPIC = 'GET_TOPIC';

export let fetchTopic = (options = {}) => async (dispatch, getState) => {
	let data = await services.topic(options);
	dispatch({
        type: GET_TOPIC,
        payload: {
            topic: data.data || {}
        }
    });
}

export let ups = (options = {}) => async (dispatch, getState) => {
	await services.ups(options);
}

export let collect = (options = {}) => async (dispatch, getState) => {
	await services.collect(options);
}

export let deCollect = (options = {}) => async (dispatch, getState) => {
	await services.deCollect(options);
}

export let replies = (options = {}) => async (dispatch, getState) => {
	await services.replies(options);
}