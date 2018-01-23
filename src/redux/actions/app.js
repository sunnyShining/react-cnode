import services from '../../services/services';
const CHANGE_ACCESS = 'CHANGE_ACCESS';
const GET_ACCESS = 'GET_ACCESS';
const GET_INFO = 'GET_INFO';
const AUTHORORINFO = 'AUTHORORINFO';
const GET_MESSAGE_COUNT = 'GET_MESSAGE_COUNT';
const GET_MESSAGE = 'GET_MESSAGE';

export let changeAccesstoken = (options = {}) => (dispatch, getState) => {
    dispatch({
        type: CHANGE_ACCESS,
        payload: {
            accesstoken: options.accesstoken
        }
    });
}

export let getAccess = (options = {}) => async (dispatch, getState) => {
	let data = await services.accesstoken(options) || {};
	dispatch({
        type: GET_ACCESS,
        payload: {
            accessInfo: data
        }
    });
}

export let getInfo = (options = {}) => async (dispatch, getState) => {
	let data = await services.user(options) || {data: {}};
	dispatch({
        type: GET_INFO,
        payload: {
            info: data.data,
        },
    });
}

export let authorOrInfo = (options = {}) => (dispatch, getState) => {
    dispatch({
        type: AUTHORORINFO,
        payload: {
            isAuthor: options.isAuthor,
        },
    });
}

export let getMessageCount = (options = {}) => async (dispatch, getState) => {
    let data = await services.count(options) || {};
    dispatch({
        type: GET_MESSAGE_COUNT,
        payload: {
            count: data,
        },
    });
}

export let getMessage = (options = {}) => async (dispatch, getState) => {
    let data = await services.messages(options) || {data: {has_read_messages: [], hasnot_read_messages: []}};
    dispatch({
        type: GET_MESSAGE,
        payload: {
            hasRead: (data.data && data.data.has_read_messages) ? data.data.has_read_messages : [],
            hasnotRead: (data.data && data.data.hasnot_read_messages) ? data.data.hasnot_read_messages : []
        },
    });
}

export let markAll = (options = {}) => async (dispatch, getState) => {
    await services.markAll(options);
}
