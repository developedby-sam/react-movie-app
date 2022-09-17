import React, { useEffect, useState } from "react";
import "./homepage.styles.scss";

const Homepage = () => {
  let API_KEY = `http://www.omdbapi.com/?s=star wars&apikey=e68b2270`;
  const [movies, setMovies] = useState([]);

  const fetchApi = () => {
    fetch(API_KEY)
      .then((response) => response.json())
      .then((resonponse) => setMovies(resonponse.Search));
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className="homepage">
      <div className="movie-list">
        {movies.map((movie, indx) => (
          <div key={indx} className="movie">
            <div
              className="bg"
              style={{ backgroundImage: `url(${movie.Poster})` }}
            ></div>
            <div className="title">{movie.Title}</div>
            <div className="published-year">{movie.Year}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
