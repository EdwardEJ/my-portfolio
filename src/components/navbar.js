import React, { useState } from 'react';
import menu from '../images/menu.svg';

export default function Navbar() {
	const [btnClassNames, setbtnClassNames] = useState(true);

	function toggleNavItems() {
		setbtnClassNames(!btnClassNames);
	}

	return (
		<header className='header'>
			<h2>First Name Last Name</h2>
			<div className='navbar-container'>
				<button onClick={toggleNavItems} className='navbar-mobile-button'>
					<img className='navbar-menu-icon' src={menu} />
				</button>
				<div className={`navbar-menu-items ${btnClassNames ? 'closed' : ''}`}>
					<a href='#About'>About</a>
					<a href='#Projects'>Projects</a>
					<a href='#Skills'>Skills</a>
					<a href='#Contact'>Contact</a>
				</div>
			</div>
		</header>
	);
}
