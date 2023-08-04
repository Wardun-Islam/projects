import React from 'react'
import './Input.css'

let Input = ({onTextChange, onButtonClick}) =>{
	return(
		  <div className="al">
   			 <input id="name" className="input-reset ba b--black-20 pa2 mb2 dib" type="text" onChange={onTextChange} placeholder="Find Robots"/>
			  <div className="ph3">
				  <button className="button" onClick={onButtonClick}>New Robot</button>
				</div>
  		  </div>
	);
}

export default Input;