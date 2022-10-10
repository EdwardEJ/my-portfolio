import React from 'react';

export default function HamburgerButton({ onClick }) {
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
