import React from 'react';

export default function contactForm() {
	return (
		<section className='form-container'>
			<h3>Contact Me</h3>
			<form className='form'>
				<div className='form-inputs'>
					<label className='sr-only' for='name'>
						Name:{' '}
					</label>
					<input placeholder='name' />
					<label className='sr-only' for='email'>
						Email:{' '}
					</label>
					<input placeholder='email' />
				</div>
				<label className='sr-only' for='message'>
					Message:{' '}
				</label>
				<textarea placeholder='message' cols='5' />
			</form>
		</section>
	);
}
