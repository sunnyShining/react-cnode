import services from '../../services/services';
const GET_USER = 'GET_USER';
const GET_COLLECT = 'GET_COLLECT';
const GET_RECENT = 'GET_RECENT';


export let getUser = (options = {}) => async (dispatch, getState) => {
	let data = await services.user(options);
	dispatch({
        type: GET_USER,
        payload: {
            userInfo: data.data || {},
        },
    });
}

export let userCollect = (options = {}) => async (dispatch, getState) => {
	let data = await services.userCollect(options);
	dispatch({
        type: GET_COLLECT,
        payload: {
            collect: data.data || [],
        },
    });
}

export let getRecent = (options = {}) => async (dispatch, getState) => {
    let data = await services.user(options);
    dispatch({
        type: GET_RECENT,
        payload: {
            recentTopics: (data.data && data.data.recent_topics) ? data.data.recent_topics : [],
            recentReplies: (data.data && data.data.recent_replies) ? data.data.recent_replies : [],
        },
    });
}