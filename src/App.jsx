import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

// COMPONENTS
import Navbar from "./components/navbar/navbar.component";
import Homepage from "./pages/homepage.component";

function App() {
  const [fav, setFav] = useState([]);
  const [searchValue, setSearchValue] = useState("star wars");

  return (
    <div className="App">
      <Navbar searchValue={searchValue} setSearchValue={setSearchValue} />
      <Routes>
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
      </Routes>
    </div>
  );
}

export default App;
