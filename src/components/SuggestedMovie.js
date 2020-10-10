import React,{useState} from 'react'
import { useEffect } from 'react';

function SuggestedMovie({poster, item, setMainMovie, setshowSuggetions }) {
    
    const rem_frm_dom = () => {
        const all_sug_movie = document.querySelectorAll(".all-display-movie-cont");
        all_sug_movie.forEach(item => {
            item.style.width = "0px";
        })
    }
    const add_to_dom = () => {
		const all_sug_movie = document.querySelector(".all-display-movie-cont");
        all_sug_movie.style.width = "100%";

    } 

    useEffect(() => {
        /* rem_frm_dom(); */
        setTimeout(() => {
            add_to_dom();
        }, 500);

    }, [item.id])
    
    const animate_sug_div = () => {
        const all_sug_movie = document.querySelector(".all-display-movie-cont");
        all_sug_movie.style.width = "0%";
    }

    return (
        <>
            <img
                	className='suggested-movie'
                onClick={() => {
                    animate_sug_div();
                    setTimeout(() => {
                        setMainMovie(item);
                    },800)
				setshowSuggetions(false);
				console.log(item);
                }}
                src={`https://image.tmdb.org/t/p/original${poster}`}
			 >
		</img>
    </>
    )
}

export default SuggestedMovie
