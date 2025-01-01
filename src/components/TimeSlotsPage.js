// src/components/TimeSlotsPage.js
import React from 'react';
import { useParams } from 'react-router-dom';

const TimeSlotsPage = () => {
  const { date } = useParams(); // Get the selected date from the URL

  // Example time slots data, this can be fetched dynamically
  const timeSlots = [
    { time: '9:00 AM', available: true },
    { time: '10:00 AM', available: false },
    { time: '11:00 AM', available: true },
    { time: '12:00 PM', available: false },
  ];

  return (
    <div>
      <h1>Time Slots for {date}</h1>
      <ul>
        {timeSlots.map((slot, index) => (
          <li key={index}>
            {slot.time} - {slot.available ? 'Available' : 'Not Available'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TimeSlotsPage;
