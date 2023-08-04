import {CREATE_ROBOT, SET_SEARCH_FIELD, SET_REQUEST_PENDING, SET_REQUEST_SUCCESS, SET_REQUEST_FAILED} from '../contents/Constants';

const setRobotsInitialState = {
	searchFieldText: ''
};

export const setRobots = (state=setRobotsInitialState, action={}) => {
	switch(action.type){
		case SET_SEARCH_FIELD:
			return Object.assign({},state,{searchFieldText: action.payload});
		default:
			return state;
	}
}

const requestRobotsInitialState = {
	requestPending: false,
	robots:[],
	hasError: false,
	error: ''
};

export const requestRobots = (state=requestRobotsInitialState, action={}) => {
	switch(action.type){
		case SET_REQUEST_PENDING:
			return Object.assign({},state,{requestPending: true});
		case SET_REQUEST_SUCCESS:
			return Object.assign({},state,{robots: action.payload, requestPending: false});
		case SET_REQUEST_FAILED:
			return Object.assign({},state,{hasError: true, error: action.payload, requestPending: false});
		case CREATE_ROBOT:
			if(action.payload.length){
	         let found = false;
	         for(let robot of state.robots){
	             found = robot.name.toLowerCase()===(action.payload.toLowerCase());
	         };
	         if(!found){ 
	             const newRobotList = state.robots.concat([
	             	{"id": state.robots.length+1,
	                 "name": action.payload,
	                 "email": action.payload+"@nodomain.com"}]);
	             return Object.assign({},state,{robots: newRobotList});
	           }
	       }
			return state;
		default:
			return state;
	}
}