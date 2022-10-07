import * as React from 'react';
import Navbar from '../components/navbar';
import AboutMe from '../components/aboutMe';
import Footer from '../components/footer';
import Contact from '../components/contact';
import ContactForm from '../components/contactForm';
import '../scss/styles.scss';

const IndexPage = () => {
	return (
		<>
			<main className='main'>
				<Navbar />
				<AboutMe />
				<Contact />
				{/* <ContactForm /> */}
			</main>
			<Footer />
		</>
	);
};

export default IndexPage;
