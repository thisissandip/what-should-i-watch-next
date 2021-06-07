import React, { useEffect } from 'react';
import { MdClose } from 'react-icons/md';

function MovieList({
	setShowFavList,
	setFavList,
	FavList,
	alldetails,
	setMainMovie,
	Get_My_List_FromLS,
}) {
	useEffect(() => {
		const mylistcont = document.querySelector('.my-movie-list-cont');
		mylistcont.style.right = '0';
		//	console.log(FavList);
	}, []);

	const CLEAR_LOCAL_STORAGE = () => {
		setFavList([]);
		localStorage.clear();
	};

	const RemoveFromMyList = (movieid) => {
		let mylist = JSON.parse(localStorage.getItem('WSIWN_my_list'));
		let UpdatedList = mylist.filter((item) => item.id !== movieid);
		localStorage.setItem('WSIWN_my_list', JSON.stringify(UpdatedList));
		Get_My_List_FromLS();
	};

	const allmovies = FavList.map((item, i) => (
		<div key={i} className='each-movie'>
			<img
				onClick={() => {
					if (alldetails.id !== item.id) {
						animate_sug_div();
						setTimeout(() => {
							setMainMovie(item);
						}, 1000);
					}
					REM_my_list_cont();
				}}
				className='each-movie-poster'
				src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
				alt='movie-poster'
			/>
			<div
				onClick={() => {
					RemoveFromMyList(item.id);
				}}
				className='remove-wrapper'>
				<MdClose className='remove-btn' />
			</div>
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
				<div className='my-list-title'>
					<div className='title'>My Movie List</div>
					<MdClose
						onClick={() => {
							REM_my_list_cont();
						}}
						className='close-btn'
					/>
				</div>

				{FavList.length > 0 ? (
					<div className='my-list-all-movies'>{allmovies}</div>
				) : (
					<div className='empty-list'>
						Add some movies to your List to binge later with a bucket of
						popcorn. 🍿 <br /> Happy Binging!
					</div>
				)}

				{FavList?.length > 0 && (
					<div className='my-list-btn-cont'>
						<button onClick={CLEAR_LOCAL_STORAGE} className='clear-list'>
							Remove All Movies
						</button>
					</div>
				)}
			</div>
		</>
	);
}

export default MovieList;
