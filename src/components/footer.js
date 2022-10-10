import React from 'react';
import GitHubIcon from '../images/github-original.svg';
import LinkedInIcon from '../images/linkedin-plain.svg';

export default function Footer() {
	return (
		<footer className='footer' id='copyright'>
			<div className='footer-container'>
				<div>
					<p>© 2022 Edward Estrada. </p>
				</div>

				<div className='footer-social-container'>
					<ul className='footer-social-links'>
						<li>
							<a target='_blank' href='https://github.com/edwardej'>
								<img alt='github-icon' src={GitHubIcon} />
							</a>
						</li>
						<li>
							<a target='_blank' href='https://www.linkedin.com/in/ed-estrada/'>
								<img alt='linkedin-icon' src={LinkedInIcon} />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
}
