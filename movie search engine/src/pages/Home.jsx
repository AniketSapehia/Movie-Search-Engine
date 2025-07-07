import MovieCard from "../components/MovieCard";

function Home(){
    const movies =[
        {id:1, title: "John Wick", releaseDate: "2014-10-24"},
        {id:2, title: "Inception", releaseDate: "2010-07-16"},
        {id:3, title: "Interstellar", releaseDate: "2014-11-07"}
    ];

    return(
        <div className="home">
            <div className="movies-grid">
                {movies.map((movie)=>(
                    <MovieCard movie={movie} key={movie.id} />
                ))}

            </div>
        </div>
    )
}

export default Home