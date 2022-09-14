import React from 'react';
import menu from '../images/menu.svg';

export default function Navbar() {
	return (
		<header className='header'>
			<nav className='navbar'>
				<div className='navbar-container'>
					<h2>First Name Last Name</h2>
					<button>
						<img className='navbar-menu-icon' src={menu} />
					</button>
				</div>
				<div className='navbar-menu-items'>
					<a href='#About'>About</a>
					<a href='#Projects'>Projects</a>
					<a href='#Skills'>Skills</a>
					<a href='#Contact'>Contact</a>
				</div>
			</nav>
		</header>
	);
}
