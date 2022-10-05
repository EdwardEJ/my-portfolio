import * as React from 'react';
import Navbar from '../components/navbar';
import AboutMe from '../components/aboutMe';
import Footer from '../components/footer';
import '../scss/styles.scss';
// markup
const IndexPage = () => {
	return (
		<>
			<Navbar />
			<AboutMe />
			<Footer />
		</>
	);
};

export default IndexPage;
