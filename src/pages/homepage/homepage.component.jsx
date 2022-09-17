import React, { useEffect, useState } from "react";
import "./homepage.styles.scss";

// components
import MovieDirectory from "../../components/movie-directory/movie-directory.component";

const Homepage = ({ fav, setFav, searchValue }) => {
  let API_KEY = `http://www.omdbapi.com/?s=${searchValue}&apikey=e68b2270`;
  const [movies, setMovies] = useState([]);

  const fetchApi = () => {
    fetch(API_KEY)
      .then((response) => response.json())
      .then((resonponse) => setMovies(resonponse.Search));
  };

  useEffect(() => {
    fetchApi();
  }, [searchValue]);

  return (
    <div className="homepage">
      <h1>Movies</h1>
      <MovieDirectory movies={movies} fav={fav} setFav={setFav} />
      {/* FAVOURITE SECTION */}
      <h1>Favourites</h1>
      {fav ? <MovieDirectory movies={fav} /> : ""}
    </div>
  );
};

export default Homepage;
