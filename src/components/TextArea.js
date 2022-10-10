import React from 'react';

export default function TextArea({ label, placeholder, rows, name }) {
	return (
		<>
			<label className='sr-only' htmlFor={label}>
				{label}:{' '}
			</label>
			<textarea
				className='form-textarea'
				name={name}
				placeholder={placeholder}
				rows={rows}
			/>
		</>
	);
}
