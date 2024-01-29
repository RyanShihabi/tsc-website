import React from 'react';
import { FaGithub } from "react-icons/fa";
import Logo from "./transparent.png"

const Navbar = () => {
    return (
      <nav className="navbar">
        <div className="navbar-container">
          <img src={Logo} alt="TSC" className="navbar-logo" />
          <h1>Open-Source Golf Broadcast Models</h1>
          <a href="https://github.com/The-Sports-Continuum" style={{"color": "white"}}>
            <FaGithub size={50} />
          </a>
        </div>
      </nav>
    );
  }

export default Navbar;