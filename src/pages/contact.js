import React, { useState } from 'react';
import ContactForm from '../components/contactForm';
import Button from '../components/Button';

const isBrowser = typeof window !== 'undefined';

export default function Contact({ onClickrenderForm }) {
	const [renderForm, setRenderForm] = useState(false);

	let viewport_width;
	let smallView;
	if (isBrowser) {
		viewport_width = window.innerWidth;
		smallView = viewport_width <= 620;
	}

	function handleClick() {
		setRenderForm(!renderForm);
		onClickrenderForm(!renderForm);
	}

	return (
		<>
			<section className={`contact-me ${renderForm ? 'show' : ''} `}>
				{!renderForm && smallView ? (
					<Button onClick={handleClick}>Contact Me</Button>
				) : (
					<ContactForm onClick={handleClick} renderForm={renderForm} />
				)}
			</section>
		</>
	);
}
