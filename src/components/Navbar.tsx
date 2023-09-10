import React from 'react';
import './navbar.scss';

function Navbar() {
  return (
    <nav className = 'container-navbar'>
        <div className = "wrapper-nav">
          <h1>Movie <span>Mania</span></h1>
          <ul>
            <li>Movies</li>
            <li>Shows</li>
          </ul>
        </div>
    </nav>
  )
}

export default Navbar