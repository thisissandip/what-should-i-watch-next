import React from 'react';
import { useEffect } from 'react';

function SuggestedMovie({poster, item, setMainMovie, setshowSuggetions }) {

    const add_to_dom = () => {
        const all_sug_movie = document.querySelector(".all-display-movie-cont");
        all_sug_movie.style.bottom = "0";
    } 

    useEffect(() => {;
        setTimeout(() => {
            add_to_dom();
        }, 500);
        console.log(item);
    }, [item.id])
    
    const animate_sug_div = () => {
        const all_sug_movie = document.querySelector(".all-display-movie-cont");
        all_sug_movie.style.bottom = "-20rem";
    }

    return (
        <>

                    <img
                className='suggested-movie'
                alt={item.original_title || item.original_name}
                onClick={() => {
                    animate_sug_div();
                            setTimeout(() => {
                                setMainMovie(item);
                            },500)
                        setshowSuggetions(false);
                        }}
                        src={`https://image.tmdb.org/t/p/original${poster}`}
                    >
                    </img>

    </>
    )
}

export default SuggestedMovie
