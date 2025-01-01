// App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import AboutMe from './components/AboutMe';
import SwimLessons from './components/SwimLessons';
import ThePool from './components/ThePool';
import CalendarPage from './components/CalendarPage'; // New calendar component
import TimeSlotsPage from './components/TimeSlotsPage'; // New time slots component
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
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          {/* Default route */}
          <Route path="/" element={
            <>
              <AboutMe />
              <ThePool />
              <SwimLessons />
              <CalendarPage /> 
            </>
          } />
          
          {/* Time slot page route */}
          <Route path="/timeslots/:date" element={<TimeSlotsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
