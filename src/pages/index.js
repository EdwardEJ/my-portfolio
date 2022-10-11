import React, { lazy, Suspense } from 'react';
import '../scss/styles.scss';
import Footer from '../components/footer';
const Navbar = lazy(() => import('../components/navbar'));
const AboutMe = lazy(() => import('./aboutMe'));
const Contact = lazy(() => import('./contact'));

const IndexPage = () => {
	return (
		<>
			<main className='main'>
				<Suspense fallback={<div>Loading...</div>}>
					<Navbar />
					<AboutMe />
					<Contact />
				</Suspense>
			</main>
			<Footer />
		</>
	);
};

export default IndexPage;
