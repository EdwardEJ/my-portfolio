import React from 'react';

export default function Button({ onClick, children, type = 'button' }) {
	return (
		<>
			<button
				onClick={onClick}
				className={`button ${type === 'submit' ? 'submit' : ''}`}
				type={type}
			>
				{children}
			</button>
		</>
	);
}
