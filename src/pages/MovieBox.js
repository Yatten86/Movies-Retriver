import React from "react";

let API_IMG = "https://image.tmdb.org/t/p/w500/";

let MovieBox = ({title, poster_path, release_date}) => {
    return (
        <div>
            <h1>{title}</h1>
            <img src={API_IMG + poster_path}/>
            <h2>{release_date}</h2>
        </div>
    )
}

export default MovieBox;