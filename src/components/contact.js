import React, { useState } from 'react';
import ContactForm from './contactForm';

export default function Contact() {
	const [renderForm, setRenderForm] = useState(false);

	function handleClick() {
		setRenderForm(!renderForm);

		document
			.getElementsByClassName('.form-container')
			?.classList?.add('.mobile');
	}

	let viewport_width = window.innerWidth;
	let smallView = viewport_width <= 620;

	return (
		<>
			<section className='contact-me'>
				{renderForm && smallView ? (
					<ContactForm />
				) : (
					<button onClick={handleClick} className='contact-me-btn'>
						Contact Me
					</button>
				)}
			</section>
		</>
	);
}
