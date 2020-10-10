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
						const filteredname = moviearray.filter(item => item.original_name!==null && item.backdrop_path!==null );
						const filteredmovies = filteredname.slice(0,5);
						setSuggetions(filteredmovies);
					});
			}, 500);
        }
	if (UserInput.length === 0) {
			setshowSuggetions(false);
		}
    }, [UserInput]);

    const SET_DISPLAY_REM_SUGGESTION = (item) => {
        setMainMovie(item);
        setshowSuggetions(false);
        setUserInput('');
        setshowMovies(true);
    }

    const displaysugesstions = Suggestions.map((item) => (
		<div
			onClick={() => {
                SET_DISPLAY_REM_SUGGESTION(item) 
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
            <div className='searchbox-cont'>
				<div className='input-cont'>
					<FaSearch className='search-icon' />
                    <input
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
    )
}

export default SearchBox
