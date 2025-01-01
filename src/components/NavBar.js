// NavBar.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../styles/NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#about-me">About Me</a></li>
        <li><a href="#the-pool">The Pool</a></li>
        <li><a href="#swim-lessons">Swim Lessons</a></li>
        <li><a href="#calendar">Calendar</a></li>
        {/* <li><a href="#calendar-contact">Contact</a></li> */}
      </ul>
    </nav>
  );
}

export default NavBar;
