import React from 'react';
import './Logo.css';
import logoImg from './brain.png';
import Tilt from 'react-tilt'


const Logo = () => {
	return (
		<div className="logo">
			<Tilt className="Tilt" options={{ max: 35, perspective: 1000 }} style={{ height: 100, width: 100 }} >
				<img className="logo-img" src={logoImg} alt="Smart Brain"/>
			</Tilt>
		</div>
	);
}

export default Logo;