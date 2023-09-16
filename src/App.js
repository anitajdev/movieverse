import { useEffect } from 'react';

// c055d791


const API_URL = 'http://www.omdbapi.com?apikey=c055d791';

const App = () => {

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);  //call our api
        const data = await response.json();  // get data 
        console.log(data.Search);

    }

    useEffect(() => {
        searchMovies('Spiderman');
    }, []);

    return (
        <h1>App</h1>
    );
}


export default App;