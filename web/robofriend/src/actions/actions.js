import {CREATE_ROBOT, SET_SEARCH_FIELD, SET_REQUEST_PENDING, SET_REQUEST_SUCCESS, SET_REQUEST_FAILED} from '../contents/Constants';

export const setSearchField = (text) => ({
	type: SET_SEARCH_FIELD,
	payload: text
});

export const createRobot = (data) => ({
	type: CREATE_ROBOT,
	payload: data
});

export const requestRobots = () => (dispatch) => {
	dispatch({type: SET_REQUEST_PENDING});
	fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then((data) => dispatch({type: SET_REQUEST_SUCCESS, payload: data}))
		.catch((error) => dispatch({type: SET_REQUEST_FAILED, payload: error}))
};