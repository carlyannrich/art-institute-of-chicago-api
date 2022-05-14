import { useState, useEffect } from 'react';
import Card from '../SearchResults/Card';

const Search = () => {
	const [value, setValue] = useState('');
	const [data, setData] = useState([]);

	useEffect(() => {
		if (value) {
			const getBySearch = async (value: string) => {
				const endpoint = `http://localhost:8000/getArtworks?keyword=${value}`;

				const res = await fetch(endpoint, {
					method: 'POST',
				});

				if (!res) return;

				const data = await res.json();

				setData(data);
			};
			getBySearch(value);
		}
	}, [value]);

	const handleChange = (e) => {
		setValue(e?.target.value);
	};
	return (
		<div className='mx-auto text-center'>
			<h1 className='text-5xl my-6'>Search for art!</h1>
			<p className='text-2xl my-3'>type in your search:</p>
			<input
				className='w-1/2 h-10 border-yellow-400 rounded border-4 p-2'
				type='search'
				aria-label='Search an artwork'
				placeholder='Search a term to discover artworks'
				onChange={handleChange}
			></input>
			<Card data={data} />
		</div>
	);
};

export default Search;
