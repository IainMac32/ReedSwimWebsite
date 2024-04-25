// CalendarContact.js
import React from 'react';
import calendar from '../images/ReedMay.jpg';
import '../styles/Calendar.css';

const Calendar = () => {
  return (
    <section id="calendar-contact" className="the-calendar-section">
      <div className="calendar-container">
        <img src={calendar} alt="calendar" className="calendar" />
        <p>For booking or questions <br/>
          Contact Me: <br/>
          905-808-1123 <br/> OR <br/>
          reedmacdong@gmail.com
        </p>
      </div>
    </section>
  );
}

export default Calendar;
