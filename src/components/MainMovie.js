import React from 'react';
import {useState, useEffect} from 'react';
import {FaStar} from 'react-icons/fa';
import './MainMovie.css';
import MovieList from './MovieList';
import useWidthHeight from './useWidth';

function MainMovie({alldetails, ShowFavList, setShowFavList, setMainMovie}) {
	/* SET THE INTIAL FAV LIST FROM LOCAL STORAGE */
	let favlist_fromLS = Object.entries(localStorage)
		.map((item) => item[1])
		.map((item) => JSON.parse(item));

	const [Fav, setFav] = useState(false);
	const [FavList, setFavList] = useState(favlist_fromLS);

	const [width] = useWidthHeight();

	useEffect(() => {
		const mainposter = document.querySelector('.main-poster');
		mainposter.style.opacity = '1';
		const mainmoviedeets = document.querySelector('.right-main-movie-details ');
		mainmoviedeets.style.opacity = '1';
	}, []);

	useEffect(() => {
		const mainmoviedeets = document.querySelector('.right-main-movie-details ');
		if (width < 900) {
			mainmoviedeets.style.width = '100%';
		} else {
			mainmoviedeets.style.width = '40%';
		}
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
		CHECK_IF_MAIN_MOVIE_IS_IN_LSTORAGE();
		setTimeout(() => {
			add_to_dom();
		}, 1000);
		console.log(alldetails);
		return () => {
			rem_frm_dom();
		};
	}, [alldetails.id]); // eslint-disable-line react-hooks/exhaustive-deps

	useEffect(() => {
		CHECK_IF_MAIN_MOVIE_IS_IN_LSTORAGE();
	}, [FavList]); // eslint-disable-line react-hooks/exhaustive-deps

	const ReadMore = () => {
		const right_details = document.querySelector('.right-main-movie-details');
		right_details.style.width = '70%';
		const more_des = document.querySelector('.more-des');
		more_des.style.display = 'initial';
		const read_more_btn = document.querySelector('.read-more');
		read_more_btn.style.display = 'none';
		const dots = document.querySelector('.dots');
		dots.style.display = 'none';
	};

	const Add_OR_REM_to_LIST = () => {
		if (!Fav) {
			localStorage.setItem(
				`MOVIE_${alldetails.original_title || alldetails.original_name}`,
				JSON.stringify(alldetails)
			);
		} else {
			localStorage.removeItem(
				`MOVIE_${alldetails.original_title || alldetails.original_name}`
			);
		}
		setTimeout(() => {
			GET_MOVIES_FROM_LOCALSTORAGE();
		}, 500);
	};

	const GET_MOVIES_FROM_LOCALSTORAGE = () => {
		let favlist_fromLS = Object.entries(localStorage)
			.map((item) => item[1])
			.map((item) => JSON.parse(item));
		console.log(favlist_fromLS);
		setFavList(favlist_fromLS);
	};

	const CHECK_IF_MAIN_MOVIE_IS_IN_LSTORAGE = () => {
		const Is_Current_Main_Fav = FavList.map((item) => item.id === alldetails.id).filter(
			Boolean
		);
		console.log(
			'Main Move fav? =',
			Is_Current_Main_Fav[0]
		); /*  <- Returns true if it Main is there  */
		if (Is_Current_Main_Fav[0]) {
			setFav(true);
		} else {
			setFav(false);
		}
		console.log('FavList', FavList);
	};

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
					{width < 900 ? (
						<div className='main-movie-des'>
							<p className='main-movie-des-para'>{alldetails.overview}</p>
						</div>
					) : (
						<div className='main-movie-des'>
							{alldetails.overview.length < 300 ? (
								alldetails.overview
							) : (
								<p className='main-movie-des-para'>
									<span className='less-des'>{alldetails.overview.slice(0, 200)}</span>
									<span className='dots'>...</span>
									<span className='more-des'>
										{alldetails.overview.slice(200, alldetails.overview.length)}
									</span>
									<span
										onClick={() => {
											ReadMore();
										}}
										className='read-more'>
										Read More
									</span>
								</p>
							)}
						</div>
					)}

					<div className='main-movie-details'>
						<FaStar className='fa-star' /> {alldetails.vote_average} / 10
					</div>
					<div className='add-to-list'>
						<input
							onChange={() => {
								setFav(!Fav);
								Add_OR_REM_to_LIST();
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
				/>
			)}
		</>
	);
}

export default MainMovie;
