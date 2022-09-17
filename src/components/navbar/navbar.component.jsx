import React from "react";
import { Link } from "react-router-dom";
import "./navbar.styles.scss";

const Navbar = () => (
  <div className="navbar">
    <div className="logo">Equiflix</div>
    <div className="nav-links">
      <Link to="/" className="nav-link">
        Home
      </Link>
      <Link to="/favourite" className="nav-link">
        Favourite
      </Link>
      <input type="text" name="search" id="search" className="search" />
    </div>
  </div>
);

export default Navbar;
