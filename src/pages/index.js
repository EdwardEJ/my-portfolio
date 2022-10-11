import React from 'react';
import Navbar from '../components/navbar';
import AboutMe from './aboutMe';
import Contact from './contact';
import Footer from '../components/footer';
import '../scss/styles.scss';

const IndexPage = () => {
	return (
		<>
			<main className='main'>
				<Navbar />
				<AboutMe />
				<Contact />
			</main>
			<Footer />
		</>
	);
};

export default IndexPage;
