import React, {useEffect} from 'react';
import endpoints from '../apifetches';
import {useState} from 'react';
import MainMovie from './MainMovie';
import SuggestedMovie from './SuggestedMovie';

function DisplayMovie({
	alldetails,
	type,
	movie,
	setMainMovie,
	setshowSuggetions,
	ShowFavList,
	setShowFavList,
}) {
	const backdrop = alldetails.backdrop_path;
	const id = alldetails.id;
	const lang = alldetails.original_language;

	const [moviesarray, setmoviesarray] = useState([]);
	const [togglebg1, settogglebg1] = useState(true);

	const changebg = () => {
		if (togglebg1) {
			const moviebg1 = document.querySelector('.movie-bg-2');
			const moviebg = document.querySelector('.movie-bg');
			moviebg.style.background = `url(https://image.tmdb.org/t/p/original${backdrop}) no-repeat top center`;
			moviebg.style.backgroundSize = 'cover';
			moviebg1.style.opacity = '0';
			settogglebg1(!togglebg1);
		} else {
			const moviebg1 = document.querySelector('.movie-bg-2');
			moviebg1.style.background = `url(https://image.tmdb.org/t/p/original${backdrop}) no-repeat top center`;
			moviebg1.style.backgroundSize = 'cover';
			moviebg1.style.opacity = '1';
			settogglebg1(!togglebg1);
		}
	};

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
				const poster_filtered = sameLangMovies.filter(
					(item) => item.poster_path !== null && item.backdrop_path !== null
				);
				setmoviesarray(poster_filtered.slice(0, 8));
			} else {
				const poster_filtered = data.results.filter(
					(item) => item.poster_path !== null && item.backdrop_path !== null
				);
				setmoviesarray(poster_filtered.slice(0, 8));
			}
		};

		setTimeout(() => {
			fetchMovies();
		}, 500);
		changebg();
	}, [id]);

	/*	CONSOLE LOG SUGGESTED MOVIES
 	useEffect(() => {
		console.log(moviesarray);
	}, [moviesarray]) */

	const suggested = moviesarray.map((item) => (
		<SuggestedMovie
			key={item.id}
			poster={item.poster_path}
			setMainMovie={setMainMovie}
			setshowSuggetions={setshowSuggetions}
			item={item}
		/>
	));

	return (
		<>
			<MainMovie
				setMainMovie={setMainMovie}
				ShowFavList={ShowFavList}
				setShowFavList={setShowFavList}
				alldetails={alldetails}
			/>
			<div className='suggested-title'>Similar</div>
			<div className='suggestion-img-cont-wrapper'>
				<div className='all-display-movie-cont'>{suggested}</div>
			</div>
		</>
	);
}

export default DisplayMovie;
