import React, { useState } from 'react';
import menu from '../images/menu.svg';

export default function Navbar() {
	const [btnClassNames, setbtnClassNames] = useState(true);

	const toggleNavItems = () => {
		setbtnClassNames(!btnClassNames);
	};

	return (
		<header className='header'>
			<nav className='navbar'>
				<div className='navbar-container'>
					<h2>First Name Last Name</h2>
					<button onClick={toggleNavItems} className='navbar-mobile-button'>
						<img className='navbar-menu-icon' src={menu} />
					</button>
				</div>
				<div
					className={`navbar-menu-items ${
						btnClassNames ? 'navbar-closed' : ''
					}`}
				>
					<a href='#About'>About</a>
					<a href='#Projects'>Projects</a>
					<a href='#Skills'>Skills</a>
					<a href='#Contact'>Contact</a>
				</div>
			</nav>
		</header>
	);
}
