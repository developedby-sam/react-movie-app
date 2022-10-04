import React from "react";
import "./movie.styles.scss";

const Movie = ({ movie, fav, setFav }) => {
  const { Title, Poster, Year } = movie;
  const handleClick = (movie) => {
    const newFav = fav.filter((movieItem) => movieItem.Title !== movie.Title);
    setFav([...newFav, movie]);
  };

  return (
    <div className="movie">
      <div className="bg" style={{ backgroundImage: `url(${Poster})` }}></div>
      <button
        className="btn"
        onClick={() => {
          handleClick(movie);
        }}
      >
        Add to favourite&nbsp;❤️
      </button>
      <div className="title">{Title}</div>
      <div className="published-year">{Year}</div>
    </div>
  );
};

export default Movie;
