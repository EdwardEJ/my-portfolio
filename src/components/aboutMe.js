import React from 'react';
import aboutMePhoto from '../images/aboutMePhoto.jpg';

export default function AboutMe() {
	return (
		<section className='about-me' id='about-me'>
			<div className='about-me'>
				<img className='aboutMePhoto' src={aboutMePhoto} alt='About Me' />
			</div>
			<p>
				Edward is a fullstack software developer focused crafting clean and
				user-friendly experiences. He loves programming, traveling, cooking,
				cinema, and mixed martial arts.
			</p>
		</section>
	);
}
