/**
 * @author sunny
 * @email 17765293970@163.com
 * @create date 2018-01-27 10:18:39
 * @modify date 2018-01-27 10:18:39
 * @desc 新建
*/

import services from '../../services/services';
const CREATE_TOPICS = 'CREATE_TOPICS';
const GET_TOPIC = 'GET_TOPIC';
const UPDATE_TOPIC = 'UPDATE_TOPIC';

export let createTopics = (options = {}) => async (dispatch, getState) => {
	let data = await services.newTopics(options);
	dispatch({
        type: CREATE_TOPICS,
        payload: {
            status: data || {}
        }
    });
}

export let fetchTopic = (options = {}) => async (dispatch, getState) => {
	let data = await services.topic(options);
	dispatch({
        type: GET_TOPIC,
        payload: {
            topic: data.data || {}
        }
    });
}

export let updateTopics = (options = {}) => async (dispatch, getState) => {
    let data = await services.update(options);
    dispatch({
        type: UPDATE_TOPIC,
        payload: {
            updateStatus: data|| {}
        }
    });
}