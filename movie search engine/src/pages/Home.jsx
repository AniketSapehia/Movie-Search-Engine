import MovieCard from "../components/MovieCard";
import {useState} from "react";

function Home(){
    const [searchQuery, setSearchQuery]= useState("")

    const movies =[
        {id:1, title: "John Wick", releaseDate: "2014-10-24"},
        {id:2, title: "Inception", releaseDate: "2010-07-16"},
        {id:3, title: "Interstellar", releaseDate: "2014-11-07"}
    ];

    const handleSearch = (e) => {
        alert(searchQuery)
        e.preventDefault()
    }
    return(
        <div className="home">
            <div>
                <form onSubmit={handleSearch} className="search-form">
                    <input value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} type="text" placeholder="Search for a movie..." className="search-input" />
                    <button type="submit" className="search-button">Search</button>
                </form>
            </div>
            <div className="movies-grid">
                {movies.map((movie)=>(
                    <MovieCard movie={movie} key={movie.id} />
                ))}

            </div>
        </div>
    )
}

export default Home