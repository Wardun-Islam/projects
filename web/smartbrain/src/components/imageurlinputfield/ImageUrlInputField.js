import React from 'react';
import './ImageUrlInputField.css';


const ImageUrlInputField = (props) => {
	return(
		<div className="container">
			<div className="input-container">
				<input style={{width:'70%', padding:'4px'}} type="text" onChange={props.onInputChange}/>
				 <button style={{width:'30%', padding:'6px'}} onClick={props.onClick}>Detect</button>
			</div>
		</div>
	);
}

export default ImageUrlInputField;