import React, {useState, useEffect} from 'react';
import {MdClose} from 'react-icons/md';

function MovieList({setShowFavList, setFavList, FavList, setMainMovie}) {
	useEffect(() => {
		const mylistcont = document.querySelector('.my-movie-list-cont');
		mylistcont.style.right = '0';
	}, []);

	/* 	const CLEAR_LOCAL_STORAGE = () => {
		setFavList([]);
		localStorage.clear();
	}; */

	const allmovies = FavList.map((item) => (
		<div
			onClick={() => {
				setMainMovie(item);
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
				{/* 				<button  onClick={CLEAR_LOCAL_STORAGE}  className='clear-list'>
					Remove All Movies
				</button> */}
			</div>
		</>
	);
}

export default MovieList;
