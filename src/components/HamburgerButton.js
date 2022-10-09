import React from 'react';

export default function HamburgerButton({ onClick }) {
	console.log('hambtn', onClick);
	return (
		<>
			<button onClick={onClick} id='btnHamburger' className='nav__toggle'>
				<span></span>
				<span></span>
				<span></span>
			</button>
		</>
	);
}
