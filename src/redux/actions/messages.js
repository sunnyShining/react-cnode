// import services from '../../services/services';
const ACTION_NAME = 'ACTION_NAME';


export let fetchTopics = (options = {}) => async (dispatch, getState) => {
	dispatch({
        type: ACTION_NAME,
        payload: {
            messages: {}
        }
    });
}
