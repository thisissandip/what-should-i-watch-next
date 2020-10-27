import React from 'react';
import {useEffect} from 'react';

function SuggestedMovie({poster, item, alldetails, setMainMovie, setshowSuggetions}) {
	const add_to_dom = () => {
		const all_sug_movie = document.querySelector('.all-display-movie-cont');
		all_sug_movie.style.bottom = '0rem';
		/* fade In details of main movie */

		const mainmoviedeets = document.querySelector('.right-main-movie-details ');
		mainmoviedeets.style.opacity = '1';
	};

	useEffect(() => {
		setTimeout(() => {
			add_to_dom();
		}, 600);
	}, [item.id]);

	const animate_sug_div = () => {
		const all_sug_movie = document.querySelector('.all-display-movie-cont');
		all_sug_movie.style.bottom = '-40rem';
		/* fade out details of main movie */
		const mainmoviedeets = document.querySelector('.right-main-movie-details ');
		mainmoviedeets.style.opacity = '0';

		document.body.scrollTop = '0';
		document.documentElement.scrollTop = '0';
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
