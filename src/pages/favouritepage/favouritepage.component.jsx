import React from "react";
import "./favouritepage.styles.scss";

// components
import MovieDirectory from "../../components/movie-directory/movie-directory.component";

const Favouritepage = ({ fav }) => {
  return (
    <div className="favouritepage">
      <h1>Favourites</h1>
      <MovieDirectory movies={fav} />
    </div>
  );
};

export default Favouritepage;
