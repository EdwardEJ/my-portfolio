import React from 'react';

export default function Input({ label, type = 'text', placeholder, required }) {
	return (
		<>
			<label className='sr-only' htmlFor={label}>
				{label}:{' '}
			</label>
			<input
				className='form-input'
				name={label}
				type={type}
				placeholder={placeholder}
				required={required}
			/>
		</>
	);
}
