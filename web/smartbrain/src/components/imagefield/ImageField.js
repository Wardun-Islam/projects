import React from 'react';
import './ImageField.css';
import 'tachyons'
const ImageField = (props) =>{

	const boxList = props.data.map((data, i) =>{
		return(
			<div className="bounding-box" key={i} style={{top:data.top_row, left:data.left_col, bottom: data.bottom_row, right: data.right_col}}>
				</div>
			);
	});


	return (
		<div className="image-container">
			<div className="absolute">
				<img id="image"
				src={props.link}
				style={{width:'500px', height:'auto' }}/>
				{boxList}
			</div>
		</div>
	);
}

export default ImageField;