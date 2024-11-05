import useFetch from './hooks/useFetch';
import './App.css';
import { useEffect, useState } from 'react';

const endpoint = 'https://dog.ceo/api/breeds/image/random';

function App() {
	const [skip, setSkip] = useState(true);
	const { data, error, loading } = useFetch(endpoint, skip);

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
				<img src={data.message} />
			) : (
				<></>
			)}
		</>
	);
}

export default App;
