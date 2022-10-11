import React from 'react';
import 'lazysizes';
import aboutMePhoto from '../images/me.jpg';

export default function AboutMe({ renderForm }) {
	return (
		<section className='about-me' id='about-me'>
			<div className='about-me-img-container'>
				<img
					className='aboutMePhoto lazyload'
					data-src={aboutMePhoto}
					alt='About Me'
				/>
			</div>
			{!renderForm ? (
				<div className='about-me-container'>
					<h3>About Me</h3>
					<p>
						I'm a fullstack software developer focused on crafting clean and
						user-friendly experiences.
					</p>
					<p>
						Outside of programming, I enjoy trying new recipes, travelling to
						cities and countries I've never been to, discussing cinema, and
						practicing bouldering
					</p>
					<p>Feel free to reach out if you're looking to work together.</p>
				</div>
			) : null}
		</section>
	);
}
