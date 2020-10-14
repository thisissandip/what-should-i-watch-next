import React from 'react';
import {useEffect} from 'react';

function SuggestedMovie({poster, item, setMainMovie, setshowSuggetions}) {
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
		}, 500);
	}, [item.id]);

	const animate_sug_div = () => {
		const all_sug_movie = document.querySelector('.all-display-movie-cont');
		all_sug_movie.style.bottom = '-40rem';
		/* fade out details of main movie */
		const mainmoviedeets = document.querySelector('.right-main-movie-details ');
		mainmoviedeets.style.opacity = '0';
	};

	const remove_more_details = () => {
		const right_details = document.querySelector('.right-main-movie-details');
		right_details.style.width = '40%';
		const more_des = document.querySelector('.more-des');
		const read_more_btn = document.querySelector('.read-more');
		const dots = document.querySelector('.dots');
		if (more_des !== null) {
			more_des.style.display = 'none';
			read_more_btn.style.display = 'initial';
			dots.style.display = 'initial';
		}
	};

	return (
		<>
			<img
				className='suggested-movie'
				alt={item.original_title || item.original_name}
				onClick={() => {
					animate_sug_div();
					setTimeout(() => {
						remove_more_details();
						setMainMovie(item);
					}, 800);
					setshowSuggetions(false);
				}}
				src={`https://image.tmdb.org/t/p/original${poster}`}></img>
		</>
	);
}

export default SuggestedMovie;
