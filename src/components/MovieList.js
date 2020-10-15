import React, {useState, useEffect} from 'react';
import {MdClose} from 'react-icons/md';

function MovieList({setShowFavList, setFavList, FavList, alldetails, setMainMovie}) {
	useEffect(() => {
		const mylistcont = document.querySelector('.my-movie-list-cont');
		mylistcont.style.right = '0';
	}, []);

	const CLEAR_LOCAL_STORAGE = () => {
		setFavList([]);
		localStorage.clear();
	};

	const allmovies = FavList.map((item) => (
		<div
			onClick={() => {
				if (alldetails.id !== item.id) {
					animate_sug_div();
					setTimeout(() => {
						setMainMovie(item);
					}, 1000);
				}
				REM_my_list_cont();
			}}
			key={item.id}
			className='each-movie'>
			<img
				className='each-movie-poster'
				src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
				alt='movie-poster'
			/>
		</div>
	));

	const REM_my_list_cont = () => {
		const mylistcont = document.querySelector('.my-movie-list-cont');
		mylistcont.style.right = '-100rem';
		setTimeout(() => {
			setShowFavList(false);
		}, 500);
	};

	const animate_sug_div = () => {
		const all_sug_movie = document.querySelector('.all-display-movie-cont');
		all_sug_movie.style.bottom = '-40rem';
		/* fade out details of main movie */
		const mainmoviedeets = document.querySelector('.right-main-movie-details ');
		mainmoviedeets.style.opacity = '0';
	};

	return (
		<>
			<div className='my-movie-list-cont'>
				<MdClose
					onClick={() => {
						REM_my_list_cont();
					}}
					className='close-btn'
				/>
				<div className='my-list-title'>My Movie List</div>
				<div className='my-list-all-movies'>{allmovies}</div>
				<div className='my-list-btn-cont'>
					<button onClick={CLEAR_LOCAL_STORAGE} className='clear-list'>
						Remove All Movies
					</button>
				</div>
			</div>
		</>
	);
}

export default MovieList;
