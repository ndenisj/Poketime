import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";

function Navbar(props) {
  console.log(props);

  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          Poke'Times
        </Link>
        <ul className="right">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default withRouter(Navbar); // appl0ies the Route properties to the Navbar Component
