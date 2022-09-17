import React from "react";
import { Link } from "react-router-dom";
import "./navbar.styles.scss";

const Navbar = ({ searchValue, setSearchValue }) => {
  const handleChange = (e) => {
    const movieSearched = e.target.value;
    setSearchValue(movieSearched);
  };
  return (
    <div className="navbar">
      <div className="logo">Equiflix</div>
      <div className="nav-links">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/favourite" className="nav-link">
          Favourite
        </Link>
        <input
          type="text"
          name="search"
          id="search"
          className="search"
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Navbar;
