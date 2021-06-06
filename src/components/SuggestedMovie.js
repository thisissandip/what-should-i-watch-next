import React from 'react';
import { useEffect } from 'react';
import useWidthHeight from './useWidth';

function SuggestedMovie({ poster, item, setMainMovie, setshowSuggetions }) {
	const [width] = useWidthHeight();

	const add_to_dom = () => {
		const all_sug_movie = document.querySelector('.all-display-movie-cont');
		all_sug_movie.style.bottom = '0rem';
		all_sug_movie.style.opacity = 1;
		/* fade In details of main movie */

		const mainmoviedeets = document.querySelector('.right-main-movie-details ');
		mainmoviedeets.style.opacity = '1';
	};

	useEffect(() => {
		setTimeout(() => {
			add_to_dom();
		}, 600);

		return () => {
			add_to_dom();
		};
	}, [item.id]);

	const animate_sug_div = () => {
		const all_sug_movie = document.querySelector('.all-display-movie-cont');

		all_sug_movie.style.bottom = '-40rem';
		all_sug_movie.style.opacity = 0;

		/* fade out details of main movie */
		const mainmoviedeets = document.querySelector('.right-main-movie-details ');
		mainmoviedeets.style.opacity = '0';

		document.body.scrollTop = '0';
		document.documentElement.scrollTop = '0';
		//document.scrollingElement.scrollTop = '0';
	};

	return (
		<>
			<img
				className='suggested-movie'
				alt={item.original_title || item.original_name}
				onClick={() => {
					animate_sug_div();
					setTimeout(() => {
						setMainMovie(item);
						setshowSuggetions(false);
					}, 800);
				}}
				src={`https://image.tmdb.org/t/p/original${poster}`}></img>
		</>
	);
}

export default SuggestedMovie;
