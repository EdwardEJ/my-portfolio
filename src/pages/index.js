import React, { useState } from 'react';
import Navbar from '../components/navbar';
import AboutMe from './aboutMe';
import Contact from './contact';
import Footer from '../components/footer';
import '../scss/styles.scss';

const IndexPage = () => {
	const [renderForm, setRenderForm] = useState(false);
	function onClickrenderForm() {
		setRenderForm(!renderForm);
	}
	return (
		<>
			<main className='main'>
				<Navbar />
				<AboutMe renderForm={renderForm} />
				<Contact onClickrenderForm={onClickrenderForm} />
			</main>
			<Footer />
		</>
	);
};

export default IndexPage;
