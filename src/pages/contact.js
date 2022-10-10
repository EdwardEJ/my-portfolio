import React, { useEffect, useState } from 'react';
import ContactForm from '../components/contactForm';
import Button from '../components/Button';

export default function Contact({ onClickrenderForm }) {
	const [renderForm, setRenderForm] = useState(false);
	const [view, setView] = useState(0);
	const viewport_width = window.innerWidth;
	const smallView = viewport_width <= 620;

	function handleClick() {
		setRenderForm(!renderForm);
		onClickrenderForm(!renderForm);
	}

	useEffect(() => {
		window.addEventListener('resize', (event) => {
			const currentWindowSize = event.currentTarget.window.innerWidth;
			setView(currentWindowSize);
		});
		return () => window.removeEventListener('resize');
	}, []);

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
