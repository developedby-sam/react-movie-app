import React from "react";
import "./movie.styles.scss";

const Movie = ({ movie, fav, setFav }) => {
  const { Title, Poster, Year } = movie;
  const handleClick = (movie) => {
    const newFav = fav.filter((movieItem) => movieItem.Title !== movie.Title);
    setFav([...newFav, movie]);
  };

  return (
    <div
      onClick={() => {
        handleClick(movie);
      }}
      className="movie"
    >
      <div className="bg" style={{ backgroundImage: `url(${Poster})` }}></div>
      <div className="title">{Title}</div>
      <div className="published-year">{Year}</div>
    </div>
  );
};

export default Movie;
