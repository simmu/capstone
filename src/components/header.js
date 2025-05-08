import React from 'react';
import './header.css';

function Header() {
  return (
    <header id="main-header">
      <h1>Little Lemon</h1>
      <nav id="main-nav" aria-label="Main navigation">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#reserve">Reserve</a></li>
          <li><a href="#about">About</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
