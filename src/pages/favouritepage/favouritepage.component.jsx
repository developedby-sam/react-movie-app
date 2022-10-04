import React from "react";
import "./favouritepage.styles.scss";

// components
import MovieDirectory from "../../components/movie-directory/movie-directory.component";

const Favouritepage = ({ fav, setFav }) => {
  return (
    <div className="favouritepage">
      <h1>Favourites</h1>
      <MovieDirectory
        movies={fav}
        fav={fav}
        setFav={setFav}
        isFavSection={true}
      />
    </div>
  );
};

export default Favouritepage;
