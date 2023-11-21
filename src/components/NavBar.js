import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "wheat",
};

function NavBar() {
  return <div className="navbar">
    <NavLink to="/" style={linkStyles} exact activeStyle={{
          background: "darkblue",
        }}>Home</NavLink>
    <NavLink to="/movies" style={linkStyles} activeStyle={{
          background: "darkblue",
        }}>Movies</NavLink>
    <NavLink to="/directors" style={linkStyles} activeStyle={{
          background: "darkblue",
        }}>Directors</NavLink>
    <NavLink to="/actors" style={linkStyles} activeStyle={{
          background: "darkblue",
        }}>Actors</NavLink>
  </div>;
}

export default NavBar;