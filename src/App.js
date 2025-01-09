import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar';
import AboutMe from './components/AboutMe';
import SwimLessons from './components/SwimLessons';
import ThePool from './components/ThePool';
import CalendarPage from './components/CalendarPage';
import TimeSlotsPage from './components/TimeSlotsPage';
import './styles/index.css';

const AppContent = () => {
  const location = useLocation();
  const showNavBar = !location.pathname.startsWith("/timeslots/");

  useEffect(() => {
    const smoothScroll = (targetId) => {
      const target = document.querySelector(targetId);
      if (target) {
        window.scrollTo({ top: target.offsetTop - 70, behavior: 'smooth' });
      }
    };

    const navbarLinks = document.querySelectorAll('.navbar a');
    navbarLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        smoothScroll(e.target.getAttribute('href'));
      });
    });
  }, []);

  return (
    <div className="App">
      {showNavBar && <NavBar />}
      <Routes>
        <Route path="/" element={
          <>
            <AboutMe />
            <ThePool />
            <SwimLessons />
            <CalendarPage />
          </>
        } />
        <Route path="/timeslots/:date" element={<TimeSlotsPage />} />
      </Routes>
    </div>
  );
}


function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
