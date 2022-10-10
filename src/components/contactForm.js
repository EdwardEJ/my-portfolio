import React from 'react';
import Input from './Input';
import TextArea from './TextArea';
import Button from './Button';

export default function ContactForm({ renderForm, onClick }) {
	return (
		<div className={`form-container ${!renderForm ? '' : 'show'} `}>
			<div className='form-container-header'>
				<h3>Contact Me</h3>
				<button className='form-container-btn' onClick={onClick}>
					X
				</button>
			</div>
			<form
				action='https://formsubmit.co/fcd3106d1813da082a039bb1035a667b'
				method='POST'
				className='form'
			>
				<div className='form-inputs'>
					<Input label='name' placeholder='Name' />
					<Input label='email' type='email' placeholder='Email' required />
				</div>
				<TextArea
					label='message'
					name='message'
					placeholder='Message Here'
					rows='10'
				/>
				<div className='button-container'>
					<Button type='submit'>Send</Button>
				</div>
			</form>
		</div>
	);
}
