import React, { useState } from 'react';

export default function Navbar() {
	const [animateMenu, setAnimateMenu] = useState(false);

	function toggleNavItems() {
		setAnimateMenu(!animateMenu);
	}

	return (
		<header className={`header ${animateMenu ? 'nav-open' : ''}`}>
			<div className='header-container full-bleed'>
				<h1>Edward Estrada</h1>
				<h2>Software Developer</h2>
			</div>
			<div className='navbar-container'>
				<button
					id='btnHamburger'
					className='nav__toggle'
					onClick={toggleNavItems}
				>
					<span></span>
					<span></span>
					<span></span>
				</button>
				<div className={`navbar-menu-items ${animateMenu ? '' : 'closed'}`}>
					<a href='#About'>About</a>
					<a href='#Projects'>Projects</a>
					<a href='#Skills'>Skills</a>
					<a href='#Resume'>Resume</a>
				</div>
			</div>
		</header>
	);
}
