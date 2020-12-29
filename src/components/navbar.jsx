import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul className="nav">
        <li className="nav-item">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/myPlaylists">Playlists</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/myLibrary">Library</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/login">Login</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/register">Register</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
