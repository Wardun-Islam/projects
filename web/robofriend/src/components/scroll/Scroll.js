import React from 'react';


const Scroll = (props) => {
	return (
		<div className='shadow-5' style={{border:'5px solid #f0a500',margin:'5px', height:'445px', overflowY:'scroll'}}>
			{props.children}
		</div>
	);
}

export default Scroll;