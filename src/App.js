import {useEffect,useState} from 'react';
import CardMovie from './CardMovie.jsx';
import './App.css';
import SearchIcon from './search.svg';
//e78b3288

const API_URL='http://www.omdbapi.com?apikey=e78b3288';

const App=()=>{
    const [searchTerm,setSearchTerm]=useState('');
    const [movies,setMovies]=useState([]);
    const searchMovies=async (title)=>{
        const response=await fetch(`${API_URL}&s=${title}`);
        const data=await response.json();

        setMovies(data.Search);
    }
    useEffect(()=>{
        searchMovies('Ready Player One');
    },[]);

    return (
        <div className="app">
            <h1>Movie Land</h1>
            <div className='search'>
                <input 
                    placeholder='Search for Movies' 
                    value={searchTerm} 
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img src={SearchIcon} alt="Search" onClick={()=>searchMovies(searchTerm)}/>
            </div>
            
            {
                movies?.length>0?(
                    <div className='container'>
                        {movies.map((movie)=>(
                            <CardMovie movie={movie}/>
                        ))}
                    </div>
                ):(
                    <div className='empty'>
                        <h2>No movies found!</h2>
                    </div>
                )
            }
        </div>
    );
}

export default App;