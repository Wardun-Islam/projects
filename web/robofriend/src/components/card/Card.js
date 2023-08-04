import React from 'react';
import './Card.css';
let Card = ({props}) =>{
	return (
		<div className="card mar center tc bg-light-blue br3 pa3 mr4 pa4-ns ba b--black-10 shadow-5 grow pointer">
			<img alt="Robot" src={`https://robohash.org/${props.name}`} className="center br-100 h4 bg-white w4 dib ba b--black-05 pa2"/>
			<h1 className="tc h1">{props.name}</h1>
			<br/>
			<h3 className = "">{props.email}</h3>
		</div>	
	);
}


export default Card;