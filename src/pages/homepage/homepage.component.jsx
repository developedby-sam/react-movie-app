import React, { useEffect, useState } from "react";
import "./homepage.styles.scss";
// Import components
import MovieDirectory from "../../components/movie-directory/movie-directory.component";

const Homepage = ({ fav, setFav, searchValue }) => {
  let API_KEY = `http://www.omdbapi.com/?s=${searchValue}&apikey=e68b2270`;
  const [movies, setMovies] = useState([]);

  // FETCH data from the movie api
  const fetchApi = () => {
    fetch(API_KEY)
      .then((response) => response.json())
      .then((resonponse) => setMovies(resonponse.Search));
  };

  // fetch movies from search api based on the search query provided by the user
  useEffect(() => {
    fetchApi();
  }, [searchValue]);

  return (
    <div className="homepage">
      <h1>Movies</h1>
      <MovieDirectory movies={movies} fav={fav} setFav={setFav} />
      {/* FAVOURITE SECTION */}
      <h1>Favourites</h1>
      {fav ? (
        <MovieDirectory
          movies={fav}
          fav={fav}
          setFav={setFav}
          isFavSection={true}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Homepage;
