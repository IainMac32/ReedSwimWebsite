// App.js
import React, { useEffect } from 'react';
import NavBar from './components/NavBar';
import AboutMe from './components/AboutMe';
import SwimLessons from './components/SwimLessons';
import ThePool from './components/ThePool';
import CalendarContact from './components/CalendarContact';
import './styles/index.css';

function App() {
  useEffect(() => {
    // Smooth scrolling behavior
    const smoothScroll = (targetId) => {
      const target = document.querySelector(targetId);
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 70,
          behavior: 'smooth'
        });
      }
    };

    const navbarLinks = document.querySelectorAll('.navbar a');
    navbarLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = e.target.getAttribute('href');
        smoothScroll(targetId);
      });
    });
  }, []);

  return (
    <div className="App">
      <NavBar />
      <AboutMe />
      <ThePool />      
      <SwimLessons />
      <CalendarContact />
    </div>
  );
}

export default App;
