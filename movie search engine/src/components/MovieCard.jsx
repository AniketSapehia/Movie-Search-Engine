
function MovieCard({movie}){
    function handleFavoriteClick() {
        alert("clicked");
    }

    return(
    <div className="movie-card">
        <div className="movie-poster">
            <img src={movie.poster} alt={movie.title}/>
            <div className="movie-overlay">
                <button className="favorite-btn" onClick={handleFavoriteClick} >❤️</button>
            </div>
        </div> 
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.releaseDate}</p>
        </div>   
    </div>
    )
}

export default MovieCard