import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav-layout">
      <ul className="nav-ul-layout">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-ul-link-all-active" : "nav-ul-link"
          }
        >
          All
        </NavLink>

        <NavLink
          to="/favorites"
          className={({ isActive }) =>
            isActive ? "nav-ul-link-faves-active" : "nav-ul-link"
          }
        >
          My Faves
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
