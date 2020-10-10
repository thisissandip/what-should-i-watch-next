import React,{useState} from 'react'
import { useEffect } from 'react'
import "./MainMovie.css"

function MainMovie({ alldetails }) {

    const [firstmount, setfirstmount] = useState(false);

    const rem_frm_dom = () => {
        const mainposter = document.querySelector(".main-poster");
        mainposter.style.height = "0%";
    }

    const add_to_dom = () => {
        const mainposter = document.querySelector(".main-poster");
        mainposter.src = `https://image.tmdb.org/t/p/original${alldetails.poster_path}`;
        mainposter.style.height = "100%";
    }
    
    useEffect(() => {
            rem_frm_dom();
        setTimeout(() => {
            add_to_dom();
            setfirstmount(true);
        }, 1000);
    }, [alldetails.id])
    
    return (
        <div className="main-movie-cont">
            <div className="right-main-movie-poster">
                <img className="main-poster" alt=""/>
            </div>
            <div className="left-main-movie-details"></div>

        </div>
    )
}

export default MainMovie
