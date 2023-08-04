import React from 'react';
import './Navigation.css';

const Navigation = ({isSignedIn, onClick}) =>{
	return (
			isSignedIn === true
			?<div className="sign-out-container">
					<p className="sign-out" onClick={()=>onClick('signin')}> Sign Out </p>
				</div>
			: <div className="sign-out-container">
					<p className="sign-out" onClick={()=>onClick('signin')}> Sign In </p>
					<p className="sign-out" onClick={()=>onClick('register')}> Register </p>
				</div>
		);
}

export default Navigation;