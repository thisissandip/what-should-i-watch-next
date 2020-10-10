import React,{useState} from 'react'
import { useEffect } from 'react';

function SuggestedMovie({ item, setMainMovie, setshowSuggetions }) {
    
    const rem_frm_dom = () => {
        const all_sug_movie = document.querySelectorAll(".suggested-movie");
        all_sug_movie.forEach(item => {
            item.style.width = "0px";
        })

        const sugmoviecont = document.querySelector(".all-display-movie-cont");
        sugmoviecont.style.opacity = "0";
    }
    const add_to_dom = () => {
		const all_sug_movie = document.querySelectorAll(".suggested-movie");
        all_sug_movie.forEach(item => {
            item.style.width = "141px";
        })
        const sugmoviecont = document.querySelector(".all-display-movie-cont");
        sugmoviecont.style.opacity = "1";
    } 

    useEffect(() => {
        rem_frm_dom();
        setTimeout(() => {
            add_to_dom();
        }, 500);

    },[item.id])

    return (
        <>
            <img
                	className='suggested-movie'
			onClick={() => {
				setMainMovie(item);
				setshowSuggetions(false);
				console.log(item);
			}}
			src={`https://image.tmdb.org/t/p/original${item.poster_path}`} >
		</img>
    </>
    )
}

export default SuggestedMovie
