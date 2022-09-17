import React from "react";
import "./movie-directory.styles.scss";

// component
import Movie from "../movie/movie.component";

const MovieDirectory = ({ movies, fav, setFav }) => {
  return (
    <div className="movie-directory">
      {movies?.map((movie, indx) => (
        <Movie key={indx} movie={movie} fav={fav} setFav={setFav} />
      ))}
    </div>
  );
};

export default MovieDirectory;
