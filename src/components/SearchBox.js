import React from 'react';
import {useState, useEffect} from 'react';
import endpoints from '../apifetches';
import {FaSearch} from 'react-icons/fa';
import {BiCameraMovie} from 'react-icons/bi';
import DisplayMovies from './DisplayMovies';

function SearchBox() {
	const [UserInput, setUserInput] = useState('');
	const [Suggestions, setSuggetions] = useState([]);
	const [showSuggestions, setshowSuggetions] = useState(false);
	const [MainMovie, setMainMovie] = useState({});
	const [showMovies, setshowMovies] = useState(false);
	const [ShowFavList, setShowFavList] = useState(false);

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
							(item) => item.original_name !== null && item.backdrop_path !== null
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
			poster_path: '/or06FN3Dka5tukK1e9sl16pB3iy.jpg',
			id: 299534,
			backdrop_path: '/orjiB3oUIsyz60hoEqkiGpy5CeO.jpg',
			original_title: 'Avengers: Endgame',
			genre_ids: [28, 12, 878],
			media_type: 'movie',
			title: 'Avengers: Endgame',
			vote_average: 8.3,
			overview:
				'After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos actions and restore order to the universe once and for all, no matter what consequences may be in store.',
			release_date: '2019-04-24',
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
			className='suggestions-list-movie'>
			{item.original_title || item.original_name}{' '}
			{item.release_date ? '(Movie)' : '(Series)'}
		</div>
	));

	return (
		<>
			<div className='nav-bar'>
				<img className='logo' src={require('../imgs/LOGO1.png')} />
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
					<div className='suggestion-cont'>{showSuggestions && displaysugesstions}</div>
				</div>
				<div className='my-watchlist-cont'>
					<BiCameraMovie className='watch-list-icon' />
					<span className='watchlist-text'>MovieList</span>
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
