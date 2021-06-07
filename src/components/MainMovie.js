import React from 'react';
import { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import './mainmovie.scss';
import MovieList from './MovieList';
import useWidthHeight from './useWidth';

function MainMovie({ alldetails, ShowFavList, setShowFavList, setMainMovie }) {
	/* SET THE INTIAL FAV LIST FROM LOCAL STORAGE */

	const [Fav, setFav] = useState(false);
	const [FavList, setFavList] = useState([]);

	const [width] = useWidthHeight();

	useEffect(() => {
		// Set Opacity of Main Poster and its Detials to 1
		const mainposter = document.querySelector('.main-poster');
		mainposter.style.opacity = '1';
		const mainmoviedeets = document.querySelector('.right-main-movie-details ');
		mainmoviedeets.style.opacity = '1';
	}, []);

	useEffect(() => {
		const mainmoviedeets = document.querySelector('.right-main-movie-details ');
		if (width < 1000) {
			mainmoviedeets.style.width = '100%';
		} else {
			mainmoviedeets.style.width = '70%';
		}
		Get_My_List_FromLS();
	}, [width]);

	const rem_frm_dom = () => {
		const mainposter = document.querySelector('.main-poster');
		mainposter.style.opacity = '0';
	};

	const add_to_dom = () => {
		const mainposter = document.querySelector('.main-poster');
		mainposter.src = `https://image.tmdb.org/t/p/original${alldetails.poster_path}`;
		mainposter.style.opacity = '1';
	};

	useEffect(() => {
		setTimeout(() => {
			add_to_dom();
		}, 1000);
		//	console.log(alldetails);
		return () => {
			rem_frm_dom();
		};
	}, [alldetails.id]); // eslint-disable-line react-hooks/exhaustive-deps

	useEffect(() => {
		CHECK_IF_MAIN_MOVIE_IS_IN_LSTORAGE();
		//	console.log(FavList);
	}, [FavList]);

	const AddToList = () => {
		let newFavList = [...FavList, alldetails];
		localStorage.setItem('WSIWN_my_list', JSON.stringify(newFavList));
		Get_My_List_FromLS();
	};

	const RemoveFromList = () => {
		let mylist = JSON.parse(localStorage.getItem('WSIWN_my_list'));
		let UpdatedList = mylist.filter((item) => item.id !== alldetails.id);
		localStorage.setItem('WSIWN_my_list', JSON.stringify(UpdatedList));
		Get_My_List_FromLS();
	};

	const Get_My_List_FromLS = () => {
		let mylist = JSON.parse(localStorage.getItem('WSIWN_my_list'));
		if (mylist) {
			setFavList(mylist);
		}
	};

	const CHECK_IF_MAIN_MOVIE_IS_IN_LSTORAGE = () => {
		const Is_Current_Main_Fav = FavList.map(
			(item) => item.id === alldetails.id
		).filter(Boolean);
		/* 	console.log(
			'Main Move fav? =',
			Is_Current_Main_Fav[0]
		); /*  <- Returns true if it Main is there  */
		if (Is_Current_Main_Fav[0]) {
			setFav(true);
		} else {
			setFav(false);
		}
	};

	useEffect(() => {
		CHECK_IF_MAIN_MOVIE_IS_IN_LSTORAGE();
		setTimeout(() => {
			add_to_dom();
		}, 1000);
		return () => {
			rem_frm_dom();
		};
	}, [alldetails.id]);

	return (
		<>
			<div className='main-movie-cont'>
				<div className='left-main-movie-poster'>
					<img
						alt={alldetails.original_title || alldetails.original_name}
						className='main-poster'
						src='https://image.tmdb.org/t/p/original/or06FN3Dka5tukK1e9sl16pB3iy.jpg'
					/>
				</div>

				<div className='right-main-movie-details'>
					<div className='main-movie-title'>
						{alldetails.original_title || alldetails.original_name}
					</div>

					<div className='main-movie-des'>
						<p className='main-movie-des-para'>{alldetails.overview}</p>
					</div>

					<div className='main-movie-details'>
						<FaStar className='fa-star' /> {alldetails.vote_average} / 10
					</div>
					<div className='add-to-list'>
						<input
							onChange={() => {
								setFav(!Fav);
								if (!Fav) {
									AddToList();
								} else {
									RemoveFromList();
								}
							}}
							type='checkbox'
							id='add-to-list-input'
							checked={Fav}
						/>
						<label htmlFor='add-to-list-input' id='add-to-list-icon'>
							❤
						</label>
						<span className='add-to-list-title'>Add to My List</span>
					</div>
				</div>
			</div>
			{ShowFavList && (
				<MovieList
					setMainMovie={setMainMovie}
					setFavList={setFavList}
					FavList={FavList}
					setShowFavList={setShowFavList}
					alldetails={alldetails}
					Get_My_List_FromLS={Get_My_List_FromLS}
				/>
			)}
		</>
	);
}

export default MainMovie;
