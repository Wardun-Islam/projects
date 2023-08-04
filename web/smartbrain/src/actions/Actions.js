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
         CLEAR_REGISTER_STATE,
         PUT_SCORE,
         CLEAR_IMAGE} from '../constants/Constants';
import Clarifai from 'clarifai';
      
// Instantiate a new Clarifai app by passing in your API key.
const app = new Clarifai.App({apiKey: '95fbdd491be44e12aae95c120fa59ae6'});

export const ChangeImageUrlField = (text) => {
	return {
		type: CHANGE_INPUT_FIELD,
		payload: text
	}
}

export const DetectFaceFromImage = (link) => (dispatch) => {
	dispatch({type: DETECT_FACE_REQUEST_PENDING});
	app.models.predict("a403429f2ddf4b49b307e318f00e528b", link)
    .then(response => {
    	dispatch({type:DETECT_FACE_REQUEST_SUCCESS, payload:response.outputs[0].data.regions})
    })
    .catch(err => {
    	dispatch({type:DETECT_FACE_REQUEST_FAILED, payload:err})
    });
}

export const ChangeRoute = (route) => (dispatch) => {
    if(route === 'home'){
        dispatch({
            type:ROUTE_HOME,
            payload:route
        });
    }
    else if(route === 'register'){
        dispatch({
            type:ROUTE_REGISTER,
            payload:route
        });
    }
    else{
        dispatch({
            type:ROUTE_SIGNIN,
            payload:route
        });
        dispatch({
            type:CLEAR_IMAGE
        });
    }
}

export const SignInUser = (email, password) => (dispatch, getState) =>{
    dispatch({type: SIGNIN_REQUEST_PENDING});
    fetch('https://aqueous-caverns-15332.herokuapp.com/signin',{
        method: 'post',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({
            email: email,
            password: password
        })
    }).then(respond => respond.json())
      .then(data => dispatch({type: SIGNIN_REQUEST_SUCCESS, payload:data}))
      .catch(error => dispatch({type: SIGNIN_REQUEST_FAILED, payload:error}))
}

export const OnEmailChange = (text) =>{
    return({
            type: CHANGE_EMAIL_SIGNIN,
            payload: text
        });
}

export const OnPasswordChange = (text) =>{
    return({
            type: CHANGE_PASSWORD_SIGNIN,
            payload: text
        });  
}

export const ClearRouteSignIn = () =>{
    return({
            type: CLEAR_CHANGE_ROUTE_TO_HOME,
        });  
}

export const ChangeNameField = (text) =>{
    return({
            type: CHANGE_NAME_REGISTER,
            payload: text
        });
}

export const ChangeEmailField = (text) =>{
    return({
            type: CHANGE_EMAIL_REGISTER,
            payload: text
        });
}

export const ChangePasswordField = (text) =>{
    return({
            type: CHANGE_PASSWORD_REGISTER,
            payload: text
        });
}

export const ClearRegisterState = () =>{
    return({
            type: CLEAR_REGISTER_STATE
        });
}
export const RegisterUser = (user) => (dispatch) =>{
    dispatch({type: REGISTER_REQUEST_PENDING});
    fetch('https://aqueous-caverns-15332.herokuapp.com/register',{
        method: 'post',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(user)
    }).then(respond => respond.json())
      .then(data => dispatch({type: REGISTER_REQUEST_SUCCESS, payload: data}))
      .catch((error) => dispatch({type: REGISTER_REQUEST_FAILED}))
}

export const GetUserInfo = (id) => (dispatch)=>{
    fetch('https://aqueous-caverns-15332.herokuapp.com/user/',{
            method: 'post',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({id: id})
        })
        .then((respond) => respond.json())
        .then((data) => dispatch({type: GET_USER_INFO, payload: data}))
        .catch((error) => dispatch({type: ''}))
}

export const PutScore = (id) =>(dispatch) =>{
  fetch('https://aqueous-caverns-15332.herokuapp.com/updatescore',{
    method: 'put',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify({id: id})
  }).then((respond) => respond.json())
    .then(data => dispatch({type:PUT_SCORE , payload:data}))
    .catch((error) => dispatch({type:''}))
}
