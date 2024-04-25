// NavBar.js
import React from 'react';
import '../styles/NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#about-me">About Me</a></li>
        <li><a href="#the-pool">The Pool</a></li>
        <li><a href="#swim-lessons">Swim Lessons</a></li>
        <li><a href="#calendar-contact">Calendar/Contact</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;
