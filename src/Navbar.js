import React from 'react';
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
    return (
      <nav className="navbar">
        <div className="navbar-container">
          <div></div>
          <h1>Golf Ball Broadcast Model</h1>
          <a href="https://github.com/RyanShihabi/Golfball-Broadcast-Model.git" style={{"color": "white"}}>
            <FaGithub size={50} />
          </a>
        </div>
      </nav>
    );
  }

export default Navbar;