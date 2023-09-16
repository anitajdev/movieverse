import { useState, useEffect } from 'react';

import MovieCard from './MovieCard';

import './App.css';
import SearchIcon from './search.svg';


const API_URL = 'http://www.omdbapi.com?apikey=c055d791';

const movie1 = {
    "Title": "Shrek",
    "Year": "2001",
    "imdbID": "tt0126029",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOGZhM2FhNTItODAzNi00YjA0LWEyN2UtNjJlYWQzYzU1MDg5L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
}


const App = () => {

    const [movies, setMovies] = useState([]);

    const searchMovies = async (title) => {  //it takes some time to fetch movies
        const response = await fetch(`${API_URL}&s=${title}`);  //call our api
        const data = await response.json();  // get data 
        setMovies(data.Search);

    }

    useEffect(() => {
        searchMovies('Shrek');
    }, []);


    return (

        <div className = "app">
            <h1>MovieLand</h1>

            <div className='search'>
                <input
                    placeholder= "Search for movies"
                    value= "Superman"
                    onChange={() => {}}
                />

                <img
                src={SearchIcon}
                alt="search"
                onClick={() => {}}
                />
            </div>

            {

                movies?.length  > 0
                    ? (
                        <div className='container'>
                            <MovieCard movie1={movie1}/>
                        </div>
                    ) : (
                        <div className='empty'>
                            <h2>No movies found</h2>
                        </div>
                    )
            }

        </div>
    );
}


export default App;