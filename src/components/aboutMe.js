import React from 'react';
import aboutMePhoto from '../images/aboutMePhoto.jpg';

export default function AboutMe({ hideAboutMe }) {
	console.log('test', hideAboutMe);
	return (
		<section className='about-me' id='about-me'>
			<div className='about-me-img-container'>
				<img className='aboutMePhoto' src={aboutMePhoto} alt='About Me' />
			</div>
			{!hideAboutMe ? (
				<div className='about-me-container'>
					<h3>About Me</h3>
					<p>
						Edward is a fullstack software developer focused crafting clean and
						user-friendly experiences. He loves programming, traveling, cooking,
						cinema, and mixed martial arts.
					</p>
				</div>
			) : null}
		</section>
	);
}
