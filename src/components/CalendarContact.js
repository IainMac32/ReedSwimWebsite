// CalendarContact.js
import React, { useState } from 'react';
import calendar1 from '../images/ReedJune.jpg';
import calendar2 from '../images/ReedJuly.jpg';
import calendar3 from '../images/ReedAugust.jpg';
import '../styles/Calendar.css';

const Calendar = () => {
  const [currentImage, setCurrentImage] = useState(calendar1);

  const nextImage = () => {
    if (currentImage === calendar1) {
      setCurrentImage(calendar2);
    } else if (currentImage === calendar2) {
      setCurrentImage(calendar3);
    }
  };

  const prevImage = () => {
    if (currentImage === calendar3) {
      setCurrentImage(calendar2);
    } else if (currentImage === calendar2) {
      setCurrentImage(calendar1);
    }
  };

  return (
    <section id="calendar-contact" className="the-calendar-section">
      <div className="calendar-container">
        <img src={currentImage} alt="calendar" className="calendar" />
        <div className="arrow-container2">
          <button onClick={prevImage} className="arrow2 left-arrow2">🠘</button>
          <button onClick={nextImage} className="arrow2 right-arrow2">🠚</button>
        </div>

        <p>For booking or questions <br/>
          Contact Reed: <br/>
          
          mac<w>swim</w>school<w>oakville</w>@gmail.com
        </p>
      </div>
    </section>
  );
}

export default Calendar;
