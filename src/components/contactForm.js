import React from 'react';

export default function ContactForm({ renderForm }) {
	return (
		<div className={`form-container ${renderForm ? 'show' : 'hide'} `}>
			<h3>Contact Me</h3>
			<form className='form'>
				<div className='form-inputs'>
					<label className='sr-only' htmlFor='name'>
						Name:{' '}
					</label>
					<input type='text' className='form-input' placeholder='name' />
					<label className='sr-only' htmlFor='email'>
						Email:{' '}
					</label>
					<input type='email' className='form-input' placeholder='email' />
				</div>
				<label className='sr-only' htmlFor='message'>
					Message:{' '}
				</label>
				<textarea className='form-textarea' placeholder='message' cols='5' />
			</form>
		</div>
	);
}
