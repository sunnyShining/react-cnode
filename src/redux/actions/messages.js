import services from '../../services/services';
const GET_MESSAGE = 'GET_MESSAGE';

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