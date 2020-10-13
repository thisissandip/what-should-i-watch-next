import React from 'react'
import { useState, useEffect } from 'react'
import { FaStar} from "react-icons/fa"
import "./MainMovie.css"

function MainMovie({ alldetails }) {

    const [Fav, setFav] = useState(false)

    const rem_frm_dom = () => {
        const mainposter = document.querySelector(".main-poster");
        mainposter.style.opacity = "0";
    }

    const add_to_dom = () => {
        const mainposter = document.querySelector(".main-poster");
        mainposter.src = `https://image.tmdb.org/t/p/original${alldetails.poster_path}`;
        mainposter.style.opacity = "1";
    }

    useEffect(() => {
        const mainposter = document.querySelector(".main-poster");
        mainposter.style.opacity = "1";
        const mainmoviedeets = document.querySelector(".right-main-movie-details ");
        mainmoviedeets.style.opacity = "1";

    /* GET ITEMS FROM LOCALSTORAGE */
        let favlist_fromLS = Object.entries(localStorage)
            .map(item => item[0])
            .filter(item  => item.startsWith("MOVIE_"));
        console.log(favlist_fromLS);
    }, [])

    useEffect(() => {
        setTimeout(() => {
            add_to_dom();
        }, 1000);
        return () => {
            rem_frm_dom();
        }
    }, [alldetails.id])

    const ReadMore = () => {
        const right_details = document.querySelector(".right-main-movie-details");
        right_details.style.width = "70%";
        const more_des = document.querySelector(".more-des");
        more_des.style.display = "initial";
        const read_more_btn = document.querySelector(".read-more");
        read_more_btn.style.display = "none";
        const dots = document.querySelector(".dots");
        dots.style.display = "none";
    } 

    const Add_to_LIST = () => {
        let movie = {
            id: alldetails.id,
            name: alldetails.original_title || alldetails.original_name,
            poster_path: alldetails.poster_path
        }
        localStorage.setItem(`MOVIE_${alldetails.original_title || alldetails.original_name}`, JSON.stringify(movie));
    }
    
    return (
        <div className="main-movie-cont">
            <div className="left-main-movie-poster">
                <img className="main-poster" src="https://image.tmdb.org/t/p/original/riYInlsq2kf1AWoGm80JQW5dLKp.jpg" />
            </div>

            <div className="right-main-movie-details">
                <div className="main-movie-title">
                    {alldetails.original_title || alldetails.original_name }
                </div>
                <div className="main-movie-des">
                    {alldetails.overview.length < 300 ? alldetails.overview :
                        <p className="main-movie-des-para">
                            <span className="less-des">
                                {alldetails.overview.slice(0, 200)}
                            </span>
                            <span className="dots">
                                ...
                            </span>
                            <span className="more-des">
                                {alldetails.overview.slice(200, alldetails.overview.length)}
                            </span>
                            <span onClick={() => { ReadMore() }} className="read-more">
                                Read More
                            </span>
                        </p>}
                </div>
                <div className="main-movie-details">
                  <FaStar className="fa-star" />  {alldetails.vote_average} / 10
                </div>
                <div className="add-to-list">
                    <input onChange={() =>
                    {
                        setFav(!Fav);
                        Add_to_LIST();
                    }}
                        type="checkbox"
                        id="add-to-list-input"
                        checked={Fav} />
                    <label htmlFor="add-to-list-input" id="add-to-list-icon">❤</label>
                    <span className="add-to-list-title">Add to My List</span>
                </div>
            </div>
        </div>
    )
}

export default MainMovie
