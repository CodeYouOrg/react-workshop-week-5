import useFetch from './hooks/useFetch';
import './App.css';
import { useEffect, useState } from 'react';

const endpoint = 'https://pokeapi.co/api/v2/pokemon/';

function App() {
	const [skip, setSkip] = useState(true);
	const [name, setName] = useState('ditto');
	const { data, error, loading } = useFetch(endpoint + name, skip);

	useEffect(() => {
		setSkip(false);
	});

	return (
		<>
			{loading ? (
				<h2>Loading...</h2>
			) : error ? (
				<h2>Error loading data</h2>
			) : data ? (
				<div>
					<h3>{data.name}</h3>
					<img src={data.sprites.front_default} />
				</div>
			) : (
				<></>
			)}
		</>
	);
}

export default App;
