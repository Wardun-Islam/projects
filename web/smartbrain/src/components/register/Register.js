import React,{Component} from 'react';
import {connect} from 'react-redux';
import {ChangeNameField, ChangeEmailField, ChangePasswordField, RegisterUser, ClearRegisterState} from '../../actions/Actions';



const mapStateToProps = (state) =>{
	return({
		isRegistered: state.RegisterReducer.isRegistered,
		name: state.RegisterReducer.name,
		email: state.RegisterReducer.email,
		password: state.RegisterReducer.password
	});
}

const mapDispatchToProps = (dispatch) =>{
	return({
		changeNameField: (event) => dispatch(ChangeNameField(event.target.value)),
		changeEmailField: (event) => dispatch(ChangeEmailField(event.target.value)),
		changePasswordField: (event) => dispatch(ChangePasswordField(event.target.value)),
		registerUser: (user) => dispatch(RegisterUser(user)),
		clearSate: () => dispatch(ClearRegisterState())
	});
}


class Register extends Component{

	render(){
		const registerNewUser = () =>{
			this.props.registerUser({name: this.props.name, email: this.props.email, password: this.props.password});
			this.props.clearSate();
			this.props.onClick('signin');
		}

		return (
			<article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l center shadow-5">
				<main className="pa4 black-80">
				  <form className="measure">
				    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
				      <legend className="f4 fw6 ph0 tc mh0">Register</legend>
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
				        <input onChange={this.props.changeNameField} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name"  id="name"/>
				      </div>
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
				        <input onChange={this.props.changeEmailField} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
				      </div>
				      <div className="mv3">
				        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
				        <input onChange={this.props.changePasswordField} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
				      </div>
				    </fieldset>
				    <div className="tc">
				      <p className="f6 link dim ph3 pv2 mb2 pointer dib white bg-purple" onClick={registerNewUser}>Register</p>
				    </div>
				  </form>
				</main>
			</article>
		);
	}
} 
export default connect(mapStateToProps, mapDispatchToProps)(Register);