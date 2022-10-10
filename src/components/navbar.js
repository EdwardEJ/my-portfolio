import React, { useState } from 'react';
import HamburgerButton from './HamburgerButton';

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
				<HamburgerButton onClick={toggleNavItems} />
				<div className={`navbar-menu-items ${animateMenu ? '' : 'closed'}`}>
					<a href='#Projects'>Projects</a>
					<a href='#Resume'>Resume</a>
				</div>
			</div>
		</header>
	);
}
