import React from 'react';
import { useState, useEffect } from 'react';
import endpoints from '../apifetches';
import { FaSearch } from 'react-icons/fa';
import DisplayMovies from './DisplayMovies';

function SearchBox() {
	const [UserInput, setUserInput] = useState('');
	const [Suggestions, setSuggetions] = useState([]);
	const [showSuggestions, setshowSuggetions] = useState(false);
	const [MainMovie, setMainMovie] = useState({});
	const [showMovies, setshowMovies] = useState(false);

	useEffect(() => {
		if (UserInput.length > 0) {
			setshowSuggetions(true);
			setTimeout(() => {
				fetch(
					endpoints.baseURL +
						endpoints.Multi_first_half +
						`&query=${UserInput}&page=1&include_adult=false`
				)
					.then((response) => response.json())
					.then((responsedata) => {
						const moviearray = responsedata.results;
						const filteredname = moviearray.filter(
							(item) =>
								item.original_name !== null && item.backdrop_path !== null
						);
						const filteredmovies = filteredname.slice(0, 5);
						setSuggetions(filteredmovies);
					});
			}, 500);
		}
		if (UserInput.length === 0) {
			setshowSuggetions(false);
		}
	}, [UserInput]);

	useEffect(() => {
		const defaultitem = {
			poster_path: '/riYInlsq2kf1AWoGm80JQW5dLKp.jpg',
			id: 497582,
			backdrop_path: '/kMe4TKMDNXTKptQPAdOF0oZHq3V.jpg',
			original_language: 'en',
			original_title: 'Enola Holmes',
			genre_ids: [80, 18, 9648],
			title: 'Enola Holmes',
			vote_average: 7.6,
			overview:
				'While searching for her missing mother, intrepid teen Enola Holmes uses her sleuthing skills to outsmart big brother Sherlock and help a runaway lord.',
			release_date: '2020-09-23',
		};

		SET_DISPLAY_REM_SUGGESTION(defaultitem);
	}, []);

	const SET_DISPLAY_REM_SUGGESTION = (item) => {
		if (showMovies) {
			const all_sug_movie = document.querySelector('.all-display-movie-cont');
			all_sug_movie.style.bottom = '-40rem';
		}
		setMainMovie(item);
		setshowSuggetions(false);
		setUserInput('');
		setshowMovies(true);
	};

	const displaysugesstions = Suggestions.map((item) => (
		<div
			onClick={() => {
				SET_DISPLAY_REM_SUGGESTION(item);
				console.log(item);
			}}
			key={item.id}
			className='suggestions-list-movie'
		>
			{item.original_title || item.original_name}{' '}
			{item.release_date ? '(Movie)' : '(Series)'}
		</div>
	));

	return (
		<>
			<div className='searchbox-cont'>
				<div className='input-cont'>
					<FaSearch className='search-icon' />
					<input
						placeholder='Type a Movie / TV Show that you Love '
						className='searchbox'
						type='text'
						value={UserInput}
						onChange={(e) => setUserInput(e.target.value)}
					/>
				</div>
				<div className='suggestion-cont'>
					{showSuggestions && displaysugesstions}
				</div>
			</div>

			{showMovies && (
				<>
					<DisplayMovies
						alldetails={MainMovie}
						setshowSuggetions={setshowSuggetions}
						setMainMovie={setMainMovie}
						movie={MainMovie.release_date ? true : false}
						type={MainMovie.media_type}
					/>
				</>
			)}
		</>
	);
}

export default SearchBox;
