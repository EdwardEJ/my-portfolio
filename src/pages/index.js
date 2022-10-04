import * as React from 'react';
import Navbar from '../components/navbar';
import AboutMe from '../components/aboutMe';
import '../scss/styles.scss';
// markup
const IndexPage = () => {
	return (
		<>
			<Navbar />,
			<AboutMe />
		</>
	);
};

export default IndexPage;
