import React from "react";
import { Link } from 'react-router-dom';


export const Navbar = () => {
  return (
    <nav>
      <a target="#" href="https://www.spacex.com/">
        <img className="logo" alt="spaceX-logo" src="/assets/spacex.png" />
      </a>
      <div>
        <Link className="navbar-link" to="/">Home</Link>
        <Link className="navbar-link" to="/launches">Launches</Link>
      </div>
    </nav>
  );
};
