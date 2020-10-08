import React, { useEffect } from 'react';
import endpoints from '../apifetches';
import { useState } from 'react';

function SuggestedMovie({
	id,
	type,
	movie,
	lang,
	setMainMovie,
	setshowSuggetions,
}) {
	const [moviesarray, setmoviesarray] = useState([]);

	useEffect(() => {
		const fetchMovies = async () => {
			let response;
			if (movie || type === 'movie') {
				response = await fetch(
					`https://api.themoviedb.org/3/movie/${id}/` + endpoints.getSimilar
				);
			} else {
				response = await fetch(
					`https://api.themoviedb.org/3/tv/${id}/` + endpoints.getSimilar
				);
			}
			let data = await response.json();
			const sameLangMovies = data.results.filter(
				(item) => item.original_language === lang
			);

			if (sameLangMovies.length > 5) {
				setmoviesarray(sameLangMovies.slice(0, 15));
			} else {
				setmoviesarray(data.results.slice(0, 15));
			}
		};
		fetchMovies();
	}, [id]);

	const suggested = moviesarray.map((item) => (
		// Call a display suggestion Component
		<div
			key={item.id}
			onClick={() => {
				setMainMovie(item);
				setshowSuggetions(false);
				console.log(item);
			}}
			className='suggested-movie'>
			{item.original_name || item.original_title}
		</div>
	));

	return (
		<div>
			Suggested:
			{suggested}
		</div>
	);
}

export default SuggestedMovie;
