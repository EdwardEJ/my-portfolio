import * as React from 'react';
import Navbar from '../components/navbar';
import AboutMe from '../components/aboutMe';
import Footer from '../components/footer';
import Contact from '../components/contact';
import '../scss/styles.scss';
// markup
const IndexPage = () => {
	return (
		<>
			<main>
				<Navbar />
				<AboutMe />
				<Contact />
			</main>
			<Footer />
		</>
	);
};

export default IndexPage;
