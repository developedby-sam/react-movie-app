import React from "react";
import "./movie.styles.scss";

const Movie = ({ movie, fav, setFav, isFavSection }) => {
  const { Title, Poster, Year } = movie;

  const handleAddMovie = (movie) => {
    const newFav = fav.filter((movieItem) => movieItem.Title !== movie.Title);
    setFav([...newFav, movie]);
    localStorage.setItem("fav", JSON.stringify([...newFav, movie]));
  };

  const handleRemoveMovie = (movie) => {
    const newFav = fav.filter((movieItem) => movieItem.Title !== movie.Title);
    setFav([...newFav]);
    localStorage.setItem("fav", JSON.stringify([...newFav]));
  };

  return (
    <div className="movie">
      <div className="bg" style={{ backgroundImage: `url(${Poster})` }}></div>
      <button
        className="btn"
        onClick={() => {
          if (isFavSection) {
            handleRemoveMovie(movie);
            console.log("clicked");
          } else {
            handleAddMovie(movie);
          }
        }}
      >
        {isFavSection ? (
          <span>Remove from favourite&nbsp;❤️</span>
        ) : (
          <span>Add to favourite&nbsp;❤️</span>
        )}
      </button>
      <div className="title">{Title}</div>
      <div className="published-year">{Year}</div>
    </div>
  );
};

export default Movie;
