import React, { useState } from 'react';
import Navbar from '../components/navbar';
import AboutMe from '../components/aboutMe';
import Footer from '../components/footer';
import Contact from '../components/contact';
import ContactForm from '../components/contactForm';
import '../scss/styles.scss';

const IndexPage = () => {
	const [hideAboutMe, setHideAboutMe] = useState(false);
	function hideAboutMeFn() {
		setHideAboutMe(!hideAboutMe);
	}
	return (
		<>
			<main className='main'>
				<Navbar />
				<AboutMe hideAboutMe={hideAboutMe} />
				<Contact testFn={hideAboutMeFn} />
			</main>
			<Footer />
		</>
	);
};

export default IndexPage;
