// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
  return (
    <div className="navbar-container">
      <nav>
        <ul className="navbar">
          <li><Link to="/" className="navbar-link">Home</Link></li>
          <li><Link to="/bookmark" className="navbar-link">Bookmarks</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
