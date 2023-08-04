import React from 'react';
import './Title.css';


const Title = ({name, contents}) =>{
	return(
		<div>
			<p className="user-info">{name}, your current rank is...</p>
			<p className="user-info">#{contents}</p>
			<p className="title">This Magic Brain will detect faces in your pictures. Give it a try.</p>
		</div>
	);
}

export default Title;