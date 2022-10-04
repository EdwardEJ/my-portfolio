import React from 'react';
import aboutMePhoto from '../images/aboutMePhoto.jpg';

export default function AboutMe() {
	return (
		<section className='about-me' id='about-me'>
			<div class='about-me'>
				<img class='aboutMePhoto' src={aboutMePhoto} alt='About Me' />
			</div>
			<p>
				Hi! I'm a software developer based in New York City. I have a passion
				for creating applications for web and mobile devices with the goal to
				convey the message that you want to send.
			</p>
		</section>
	);
}
