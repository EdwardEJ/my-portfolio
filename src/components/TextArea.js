import React from 'react';

export default function TextArea({ label, placeholder, rows }) {
	return (
		<>
			<label className='sr-only' htmlFor={label}>
				{label}:{' '}
			</label>
			<textarea
				className='form-textarea'
				placeholder={placeholder}
				rows={rows}
			/>
		</>
	);
}
