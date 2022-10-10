import React from 'react';
import aboutMePhoto from '../images/me.jpg';

export default function AboutMe({ renderForm }) {
	return (
		<section className='about-me' id='about-me'>
			<div className='about-me-img-container'>
				<img className='aboutMePhoto' src={aboutMePhoto} alt='About Me' />
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
						cities and countries I've never been to, discussing cinema and the
						film industry, and brazilian jiujitsu
					</p>
				</div>
			) : null}
		</section>
	);
}
