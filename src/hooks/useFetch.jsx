import { useEffect, useState } from 'react';

const useFetch = (url, skip = false) => {
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const getData = async () => {
			if (skip) return;
			setError(null);
			setLoading(true);
			try {
				const response = await fetch(url);
				if (response.ok) {
					const json = await response.json();
					setData(json);
				} else {
					const json = await response.json();
					throw json;
				}
			} catch (error) {
				setError(error);
			} finally {
				setLoading(false);
			}
		};
		getData();
	}, [url, skip]);

	return { data, error, loading };
};

export default useFetch;
