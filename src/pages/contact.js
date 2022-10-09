import React, { useState } from 'react';
import ContactForm from '../components/contactForm';

export default function Contact({ onClickrenderForm }) {
	const [renderForm, setRenderForm] = useState(false);
	const viewport_width = window.innerWidth;
	const smallView = viewport_width <= 620;

	function handleClick() {
		setRenderForm(!renderForm);
		onClickrenderForm(!renderForm);
	}

	return (
		<>
			<section className={`contact-me ${renderForm ? 'show' : ''} `}>
				{renderForm && smallView ? (
					<ContactForm renderForm={renderForm} />
				) : (
					<button onClick={handleClick} className='contact-me-btn'>
						Contact Me
					</button>
				)}
			</section>
		</>
	);
}
