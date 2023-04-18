import React, {useEffect, useState} from 'react';
import './App.css';
import MovieBox from './pages/MovieBox';

const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=a40907a09d30859d9dad7c652801cc71";

function App() {

  let [movies, setMovies] = useState([])
  let example = ['first', 'second', 'dsa']

  useEffect (() => {
    fetch(API_URL)
    .then((res) => res.json())
    .then(data => {
      console.log(data);
      setMovies(data.results);
    })
  },[])

  return (
    <div>
      {movies.map((movieReq)=>
      <MovieBox key={movieReq.id} {...movieReq}/>)}
    </div>
  );
}

export default App;
