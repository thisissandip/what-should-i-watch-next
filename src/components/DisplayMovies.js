import React, { useEffect } from 'react';
import endpoints from '../apifetches';
import { useState } from 'react';
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
		settogglebg1(!togglebg1);
		const moviebg1 = document.querySelector('.movie-bg-2');
		const moviebg = document.querySelector('.movie-bg');
		if (togglebg1) {
			moviebg.style.background = `url(https://image.tmdb.org/t/p/original${backdrop}) no-repeat top center`;
			moviebg.style.backgroundSize = 'cover';
			moviebg.style.opacity = '1';
			moviebg1.style.opacity = '0';
		} else {
			moviebg1.style.background = `url(https://image.tmdb.org/t/p/original${backdrop}) no-repeat top center`;
			moviebg1.style.backgroundSize = 'cover';
			moviebg1.style.opacity = '1';
			moviebg.style.opacity = '0';
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
				setmoviesarray(poster_filtered.slice(0, 6));
			} else {
				const poster_filtered = data.results.filter(
					(item) => item.poster_path !== null && item.backdrop_path !== null
				);
				setmoviesarray(poster_filtered.slice(0, 6));
			}
		};

		setTimeout(() => {
			fetchMovies();
		}, 500);
		changebg();
	}, [id]); // eslint-disable-line react-hooks/exhaustive-deps

	const suggested = moviesarray.map((item) => (
		<SuggestedMovie
			key={item.id}
			poster={item.poster_path}
			alldetails={alldetails}
			setMainMovie={setMainMovie}
			setshowSuggetions={setshowSuggetions}
			item={item}
		/>
	));

	useEffect(() => {
		console.log(moviesarray);
	}, [moviesarray]);

	return (
		<>
			<MainMovie
				setMainMovie={setMainMovie}
				ShowFavList={ShowFavList}
				setShowFavList={setShowFavList}
				alldetails={alldetails}
			/>
			<div className='suggested-title'>Similar Movies</div>
			<div className='all-display-movie-wrapper'>
				<div className='all-display-movie-cont'>
					{moviesarray.length > 0 ? (
						suggested
					) : (
						<div className='no-movies'>
							No Similar Movies Found. I am Sorry I let you down 😔 <br />
							Please Try to Search for some other Movie / Series. I will try my
							best ✨
						</div>
					)}
				</div>
			</div>
			<div className='footer'>
				Made with ❤️ by
				<a href='https://github.com/thisissandip' target='_blank'>
					Sandip Mondal
				</a>
			</div>
		</>
	);
}

export default DisplayMovie;
