import React from 'react';
import { Link } from 'react-router';
import './header.css';

function Header() {
  return (
    <header id="main-header">
      <h1><Link to="/">Little Lemon</Link></h1>
      <nav id="main-nav" aria-label="Main navigation">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/reserve">Reserve</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
