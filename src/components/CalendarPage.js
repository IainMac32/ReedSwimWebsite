// src/components/CalendarPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../styles/CalendarPage.css'; // Import the CSS file for styling


const CalendarPage = () => {
  const navigate = useNavigate();

  const handleDayClick = (value) => {
    const selectedDate = value.toISOString().split('T')[0]; // Format: YYYY-MM-DD
    navigate(`/timeslots/${selectedDate}`);
  };

  return (
    <section id="calendar" className="the-calendar-section">
      <div>
        <h1>Choose a date!</h1>
        <Calendar
          defaultActiveStartDate={new Date(2025, 6, 1)} // July is month 6 (zero-based index)
          minDate={new Date(2025, 6, 1)}  // Start of July
          maxDate={new Date(2025, 7, 31)} // End of July
          onClickDay={handleDayClick}
        />
      </div>
    </section>
  );
};

export default CalendarPage;
