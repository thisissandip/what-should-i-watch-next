import React from 'react';
import { useState, useEffect } from 'react';
import MainMovieComp from './MainMovie';
import SuggestedMovie from './SuggestedMovie';
import endpoints from '../apifetches';

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
						const filteredmovies = responsedata.results.slice(0, 5);
						setSuggetions(filteredmovies);
					});
			}, 1000);
		}
	}, [UserInput]);

	const displaysugesstions = Suggestions.map((item) => (
		<div
			key={item.id}
			onClick={() => {
				setshowMovies(true);
				setMainMovie(item);
				setshowSuggetions(false);
				console.log(item);
			}}
			className='suggestions select-movie'>
			{item.original_title || item.original_name}{' '}
			{item.release_date ? '(Movie)' : '(Series)'}
		</div>
	));

	return (
		<div className='searchbox'>
			<input
				type='text'
				value={UserInput}
				onChange={(e) => setUserInput(e.target.value)}
			/>
			{showSuggestions && displaysugesstions}

			{showMovies && (
				<>
					{' '}
					<MainMovieComp
						alldetails={MainMovie}
						id={MainMovie.id}
						name={MainMovie.original_name || MainMovie.original_title}
					/>
					<SuggestedMovie
						id={MainMovie.id}
						setshowSuggetions={setshowSuggetions}
						setMainMovie={setMainMovie}
						lang={MainMovie.original_language}
						movie={MainMovie.release_date ? true : false}
						type={MainMovie.media_type}
					/>
				</>
			)}
		</div>
	);
}

export default SearchBox;
