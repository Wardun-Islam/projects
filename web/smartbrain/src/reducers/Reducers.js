import {CHANGE_INPUT_FIELD,
         DETECT_FACE_REQUEST_PENDING,
         DETECT_FACE_REQUEST_SUCCESS,
         DETECT_FACE_REQUEST_FAILED,
         SIGNIN_REQUEST_SUCCESS,
         SIGNIN_REQUEST_PENDING,
         SIGNIN_REQUEST_FAILED,
         ROUTE_HOME,
         ROUTE_REGISTER,
         ROUTE_SIGNIN,
         CHANGE_EMAIL_SIGNIN,
         CHANGE_PASSWORD_SIGNIN,
         CLEAR_CHANGE_ROUTE_TO_HOME,
         CHANGE_EMAIL_REGISTER,
         CHANGE_PASSWORD_REGISTER,
         CHANGE_NAME_REGISTER,
         REGISTER_REQUEST_PENDING,
         REGISTER_REQUEST_SUCCESS,
         REGISTER_REQUEST_FAILED,
         GET_USER_INFO,
         PUT_SCORE,
         CLEAR_REGISTER_STATE,
         CLEAR_IMAGE} from '../constants/Constants';


const initialStateIRR = {
	imageUrlField: '',
	imageUrl: '',
	requestPending: false,
	imageData: [],
	hasError: false,
	detect: false
}

export const ImageRecognigationReducer = (state=initialStateIRR, action={}) =>{
	switch(action.type){
		case CLEAR_IMAGE:
			return initialStateIRR;
		case CHANGE_INPUT_FIELD:
			return Object.assign({},state,{imageUrlField: action.payload});
		case DETECT_FACE_REQUEST_PENDING:
			return Object.assign({},state,{requestPending: true,imageUrl:state.imageUrlField});
		case DETECT_FACE_REQUEST_SUCCESS:
			const image = document.getElementById("image");
			const box_array = action.payload.map((data,i) =>{
				return ({
				top_row: image.height*data.region_info.bounding_box.top_row,
				left_col: image.width*data.region_info.bounding_box.left_col,
				bottom_row: image.height-image.height*data.region_info.bounding_box.bottom_row,
				right_col: image.width-image.width*data.region_info.bounding_box.right_col
				});
			});
			return Object.assign({},state,{imageData: box_array, requestPending: false, detect: true});
		case DETECT_FACE_REQUEST_FAILED:
			return Object.assign({},state,{requestPending: false, hasError:true});
		default:
			return state;
	}
}
const routeInitialState = {
	route: 'signin',
	isSignedIn: false,
	userName: '',
	userEntries: 0
}
export const RouteReducer = (state=routeInitialState, action={}) =>{
	switch(action.type){
		case ROUTE_HOME:
			return Object.assign({}, state, {route: action.payload, isSignedIn: true});
		case ROUTE_REGISTER:
			return Object.assign({}, state, {route: action.payload, isSignedIn: false});
		case ROUTE_SIGNIN:
			return Object.assign({}, state, {route: action.payload, isSignedIn: false});
		case GET_USER_INFO:
			return Object.assign({}, state, {userName: action.payload.name, userEntries: action.payload.entries});
		case PUT_SCORE:
			return Object.assign({}, state, {userEntries: action.payload.entries});
		default:
			return state;

	}
}


const signInInitialState = {
	email: '',
	password: '',
	changeRouteToHome: false,
	isSignInRequestPending: false,
	hasSignInRequestError: false,
	currentUserId: '',
}
export const SignInReducer = (state=signInInitialState, action={}) =>{
	switch(action.type){
		case CHANGE_EMAIL_SIGNIN:
			return Object.assign({}, state, {email: action.payload});
		case CHANGE_PASSWORD_SIGNIN:
			return Object.assign({}, state, {password: action.payload});
		case SIGNIN_REQUEST_PENDING:
			return Object.assign({}, state, {isSignInRequestPending: true});
		case SIGNIN_REQUEST_SUCCESS:
			if(action.payload.signIn === 'success')
				return Object.assign({}, state, {currentUserId: action.payload.userId, isSignInRequestPending: false, changeRouteToHome: true});
			else
				return Object.assign({}, state, {isSignInRequestPending: false});
		case SIGNIN_REQUEST_FAILED:
			return Object.assign({}, state, {isSignInRequestPending: false, hasSignInRequestError: true});
		case CLEAR_CHANGE_ROUTE_TO_HOME:
			return Object.assign({}, state, {hasSignInRequestError: false, changeRouteToHome: false, currentUserId: '', email: '', password: ''});

		default:
			return state;
	}
}

const registerInitialState = {
	name:'',
	email: '',
	password: '',
	isRegisterRequestPending: false,
	hasRegisterRequestError: false,
	isRegistered: false
}
export const RegisterReducer = (state=registerInitialState, action={}) =>{
	switch(action.type){
		case CHANGE_NAME_REGISTER:
			return Object.assign({}, state, {name: action.payload});
		case CHANGE_EMAIL_REGISTER:
			return Object.assign({}, state, {email: action.payload});
		case CHANGE_PASSWORD_REGISTER:
			return Object.assign({}, state, {password: action.payload});
		case REGISTER_REQUEST_PENDING:
		 	return Object.assign({}, state, {REGISTER_REQUEST_PENDING: true});
		case REGISTER_REQUEST_SUCCESS:
		 	if(action.payload.registration === 'success')
		 		return Object.assign({}, state, {isRegisterRequestPending: false, isRegistered: true});
		 	else
		 		return Object.assign({}, state, {isRegisterRequestPending: false});
		case REGISTER_REQUEST_FAILED:
		 	return Object.assign({}, state, {isRegisterRequestPending: false, hasRegisterRequestError: true});
		case CLEAR_REGISTER_STATE:
		 	return Object.assign({}, state, {isRegistered: false, hasRegisterRequestError: false, name: '', email: '', password: ''});

		default:
			return state;
	}
}