import React from 'react';
import GitHubIcon from '../images/github-original.svg';
import LinkedInIcon from '../images/linkedin-plain.svg';

export default function Footer() {
	return (
		<div className='footer' id='copyright'>
			<div className='container'>
				<div className='col span_5'>
					<p>© 2022 Edward Estrada. </p>
				</div>

				<div className='footer-social-container'>
					<ul className='footer-social-links'>
						<li>
							<a target='_blank' href='https://github.com/edwardej'>
								<img src={GitHubIcon} />
							</a>
						</li>{' '}
						<li>
							<a target='_blank' href='https://www.linkedin.com/in/ed-estrada/'>
								<img src={LinkedInIcon} />
							</a>
						</li>{' '}
						<li>
							<a
								target='_blank'
								href='http://stackoverflow.com/users/1757401/josue-espinosa'
							>
								<i className='fa fa-stackexchange'></i>
							</a>
						</li>{' '}
					</ul>
				</div>
			</div>
		</div>
	);
}
