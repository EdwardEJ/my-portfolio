import React from 'react';
import Input from './Input';
import TextArea from './TextArea';
import Button from './Button';

export default function ContactForm({ renderForm }) {
	return (
		<div className={`form-container ${renderForm ? 'show' : 'hide'} `}>
			<h3>Contact Me</h3>
			<form className='form'>
				<div className='form-inputs'>
					<Input label='name' placeholder='Name' />
					<Input label='email' type='email' placeholder='Email' required />
				</div>
				<TextArea label='message' placeholder='Message' rows='10' />
				<div className='button-container'>
					<Button type='submit'>Send</Button>
				</div>
			</form>
		</div>
	);
}
