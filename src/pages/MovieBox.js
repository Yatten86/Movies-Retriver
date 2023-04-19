import React from "react";
// import Modal from "tailwindcss"

let API_IMG = "https://image.tmdb.org/t/p/w500/";

let MovieBox = ({title, poster_path, release_date, overview}) => {
    return (
        <div className="w-full p-10 shadow-md lg:max-w-lg items-center">
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" >
                <img className="h-auto max-w-full rounded-lg" src ={API_IMG + poster_path} alt=""/>
            </div>
            <div className="flex justify-center">
                <button type="button" className="text-white items-center bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">View More</button>
                {/* <Modal>

                </Modal> */}
            </div>
            {/* <h1>{title}</h1>
            <h2>{release_date}</h2>
            <p>{overview}</p> */}
        </div>
    )
}

export default MovieBox;