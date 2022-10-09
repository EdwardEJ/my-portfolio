import React from 'react';

export default function Input({ label, type = 'text', placeholder }) {
	return (
		<>
			<label className='sr-only' htmlFor={label}>
				{label}:{' '}
			</label>
			<input
				name={label}
				type={type}
				className='form-input'
				placeholder={placeholder}
			/>
		</>
	);
}
