import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import Logo from "./transparent.png"

const Navbar = () => {
    const [searchTerm, setSearchTerm] = useState('');
  
    const handleSearchChange = (e) => {
      setSearchTerm(e.target.value);
    };
  
    // const handleSearchSubmit = () => {
    //   // Add your search functionality here, e.g., redirect to search results page
    //   console.log('Search submitted:', searchTerm);
    // };
  
    return (
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" >
            <img src={Logo} alt="TSC" className="navbar-logo" />
          </Link>
          <div className="search-bar-container">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="search-bar"
            />
            <FaSearch className="search-icon" />
          </div>
          <ul className="nav-menu">
            <li className="nav-item">
              <a href="/" className="nav-links">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="/wigo" className="nav-links">
                Github
              </a>
            </li>
            <li className="nav-item">
              <a href="/about" className="nav-links">
                About
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }

export default Navbar;