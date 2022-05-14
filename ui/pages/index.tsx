import Head from 'next/head';
import { useContext } from 'react';
import * as I from '../utils/interfaces';
import Search from '../components/Search';

const Home = ({ data }: I.Data) => {
	return (
		<div>
			<Head>
				<title>Art Finder! Art Institute of Chicago</title>
				<meta name='description' content='Created by Carly Richardson' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main>
				<Search />
			</main>
		</div>
	);
};

export default Home;
