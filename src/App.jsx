import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

// COMPONENTS
import Navbar from "./components/navbar/navbar.component";
import Homepage from "./pages/homepage/homepage.component";
import Favouritepage from "./pages/favouritepage/favouritepage.component";

function App() {
  const [fav, setFav] = useState([]);
  const [searchValue, setSearchValue] = useState("star wars");

  useEffect(() => {
    const favMovies = JSON.parse(localStorage.getItem("fav"));
    if (favMovies) {
      setFav(favMovies);
    }
  }, []);

  return (
    <div className="App">
      <Navbar searchValue={searchValue} setSearchValue={setSearchValue} />
      <Routes>
        {/* Route for the favourite page */}
        <Route
          exact
          path="/"
          element={
            <Homepage
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              fav={fav}
              setFav={setFav}
            />
          }
        />
        {/* Route for the favourite page */}
        <Route
          path="/favourite"
          element={<Favouritepage fav={fav} setFav={setFav} />}
        />
      </Routes>
    </div>
  );
}

export default App;
