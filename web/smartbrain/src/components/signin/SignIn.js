import React,{Component} from 'react';
import {connect} from 'react-redux';
import {SignInUser, OnEmailChange, OnPasswordChange} from '../../actions/Actions';




const mapStateToProps = (state) =>{
	return({
		email: state.SignInReducer.email,
		password: state.SignInReducer.password,
		changeRouteToHome: state.SignInReducer.changeRouteToHome,
		isSignInRequestPending: state.SignInReducer.isSignInRequestPending,
		currentUserId: state.SignInReducer.currentUserId
	})
}
const mapDispatchToProps = (dispatch) =>{
	return({
		signInUser: (email, password) => dispatch(SignInUser(email, password)),
		onEmailChange: (event) => dispatch(OnEmailChange(event.target.value)),
		onPasswordChange: (event) => dispatch(OnPasswordChange(event.target.value))
	})
}


class SignIn extends Component{ 

 render(){
 	const onClickSignIn = () =>{
 		this.props.signInUser(this.props.email, this.props.password);
 	} 
 	if(this.props.changeRouteToHome){
 		this.props.onClick('home');
 	}
 	return (
		<article className="br2 ba dark-gray b--black-10 mv4 shadow-5 w-100 w-50-m w-25-l center">
			<main className="pa4 black-80">
			  <form className="measure">
			    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
			      <legend className="f4 fw6 ph0 tc mh0">Sign In</legend>
			      <div className="mt3">
			        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
			        <input onChange={this.props.onEmailChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
			      </div>
			      <div className="mv3">
			        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
			        <input onChange={this.props.onPasswordChange} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
			      </div>
			    </fieldset>
			    <div className="tc">
			      <p className="f6 link dim ph3 pv2 mb2 pointer dib white bg-purple" onClick={onClickSignIn}>Sign In</p>
			    </div>
			    <div className="lh-copy mt3 tc">
			      <p className="f6 link dim black db pointer" onClick={()=>this.props.onClick('register')}>Register</p>
			    </div>
			  </form>
			</main>
		</article>
	);
 }

} 
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);