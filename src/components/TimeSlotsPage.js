import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate
import emailjs from 'emailjs-com'; // Import EmailJS
import '../styles/TimeSlot.css';

// Example availability data for each day (July 1 to August 31)
const availabilityData = {
  '2025-07-01': [

  ],
  '2025-07-02': [
  ],
  '2025-07-03': [
  ],
  '2025-07-04': [
  ],
  '2025-07-05': [
  ],
  '2025-07-06': [
  ],
  '2025-07-07': [
  ],
  '2025-07-08': [
  ],
  '2025-07-09': [
  ],
  '2025-07-10': [
  ],
  '2025-07-11': [
  ],
  '2025-07-12': [
  ],
  '2025-07-13': [
  ],
  '2025-07-14': [
  ],
  '2025-07-15': [
    { time: '9:00 AM', available: true },
    { time: '9:30 AM', available: true },
    { time: '10:00 AM', available: true },
    { time: '10:30 AM', available: true },
    { time: '11:00 AM', available: true },
    { time: '11:30 AM', available: true },
    { time: '12:00 PM', available: true },
    { time: '12:30 PM', available: true },
    { time: '1:00 PM', available: true },
    { time: '1:30 PM', available: true },
    { time: '2:00 PM', available: true },
    { time: '2:30 PM', available: true },
    { time: '3:00 PM', available: true },
    { time: '3:30 PM', available: true },
    { time: '5:00 PM', available: true },
    { time: '5:30 PM', available: true },
    { time: '6:00 PM', available: true },
    { time: '6:30 PM', available: true },
    { time: '7:00 PM', available: true },
    { time: '7:30 PM', available: true }
  ],
  '2025-07-16': [
    { time: '9:00 AM', available: true },
    { time: '9:30 AM', available: true },
    { time: '10:00 AM', available: true },
    { time: '10:30 AM', available: true },
    { time: '11:00 AM', available: true },
    { time: '11:30 AM', available: true },
    { time: '12:00 PM', available: true },
    { time: '12:30 PM', available: true },
    { time: '1:00 PM', available: true },
    { time: '1:30 PM', available: true },
    { time: '2:00 PM', available: true },
    { time: '2:30 PM', available: true },
    { time: '3:00 PM', available: true },
    { time: '3:30 PM', available: true },
    { time: '5:00 PM', available: true },
    { time: '5:30 PM', available: true },
    { time: '6:00 PM', available: true },
    { time: '6:30 PM', available: true },
    { time: '7:00 PM', available: true },
    { time: '7:30 PM', available: true }
  ],
  '2025-07-17': [
    { time: '9:00 AM', available: true },
    { time: '9:30 AM', available: true },
    { time: '10:00 AM', available: true },
    { time: '10:30 AM', available: true },
    { time: '11:00 AM', available: true },
    { time: '11:30 AM', available: true },
    { time: '12:00 PM', available: true },
    { time: '12:30 PM', available: true },
    { time: '1:00 PM', available: true },
    { time: '1:30 PM', available: true },
    { time: '2:00 PM', available: true },
    { time: '2:30 PM', available: true },
    { time: '3:00 PM', available: true },
    { time: '3:30 PM', available: true },
    { time: '5:00 PM', available: true },
    { time: '5:30 PM', available: true },
    { time: '6:00 PM', available: true },
    { time: '6:30 PM', available: true },
    { time: '7:00 PM', available: true },
    { time: '7:30 PM', available: true }
  ],
  '2025-07-18': [
    { time: '9:00 AM', available: true },
    { time: '9:30 AM', available: true },
    { time: '10:00 AM', available: true },
    { time: '10:30 AM', available: true },
    { time: '11:00 AM', available: true },
    { time: '11:30 AM', available: true },
    { time: '12:00 PM', available: true },
    { time: '12:30 PM', available: true },
    { time: '1:00 PM', available: true },
    { time: '1:30 PM', available: true },
    { time: '2:00 PM', available: true },
    { time: '2:30 PM', available: true },
    { time: '3:00 PM', available: true },
    { time: '3:30 PM', available: true },
    { time: '4:00 PM', available: true },
    { time: '5:30 PM', available: true },
    { time: '6:30 PM', available: true },
    { time: '7:00 PM', available: true },
    { time: '7:30 PM', available: true }
  ],
  '2025-07-19': [
    { time: '9:00 AM', available: true },
    { time: '9:30 AM', available: true },
    { time: '10:00 AM', available: true },
    { time: '10:30 AM', available: true },
    { time: '11:00 AM', available: true },
    { time: '11:30 AM', available: true },
    { time: '12:00 PM', available: true },
    { time: '12:30 PM', available: true },
    { time: '1:00 PM', available: true },
    { time: '1:30 PM', available: true },
    { time: '2:00 PM', available: true },
    { time: '2:30 PM', available: true },
    { time: '3:00 PM', available: true },
    { time: '3:30 PM', available: true },
    { time: '4:00 PM', available: true },
    { time: '4:30 PM', available: true },
    { time: '5:00 PM', available: true },
    { time: '5:30 PM', available: true },
    { time: '6:00 PM', available: true },
    { time: '6:30 PM', available: true },
    { time: '7:00 PM', available: true },
    { time: '7:30 PM', available: true }
  ],
  '2025-07-20': [
    { time: '9:00 AM', available: true },
    { time: '9:30 AM', available: true },
    { time: '10:00 AM', available: true },
    { time: '10:30 AM', available: true },
    { time: '11:00 AM', available: true },
    { time: '11:30 AM', available: true },
    { time: '12:00 PM', available: true },
    { time: '12:30 PM', available: true },
    { time: '1:00 PM', available: true },
    { time: '1:30 PM', available: true },
    { time: '2:00 PM', available: true },
    { time: '2:30 PM', available: true },
    { time: '3:00 PM', available: true },
    { time: '3:30 PM', available: true },
    { time: '4:00 PM', available: true },
    { time: '4:30 PM', available: true },
    { time: '5:00 PM', available: true },
    { time: '5:30 PM', available: true },
    { time: '6:00 PM', available: true },
    { time: '6:30 PM', available: true },
    { time: '7:00 PM', available: true },
    { time: '7:30 PM', available: true }
  ],
  '2025-07-21': [
    { time: '9:00 AM', available: true },
    { time: '9:30 AM', available: true },
    { time: '10:00 AM', available: true },
    { time: '10:30 AM', available: true },
    { time: '11:00 AM', available: true },
    { time: '11:30 AM', available: true },
    { time: '12:00 PM', available: true },
    { time: '12:30 PM', available: true },
    { time: '1:00 PM', available: true },
    { time: '1:30 PM', available: true },
    { time: '2:00 PM', available: true },
    { time: '2:30 PM', available: true },
    { time: '3:00 PM', available: true },
    { time: '3:30 PM', available: true },
    { time: '4:00 PM', available: true },
    { time: '4:30 PM', available: true },
    { time: '5:00 PM', available: true },
    { time: '5:30 PM', available: true },
    { time: '6:00 PM', available: true },
    { time: '6:30 PM', available: true },
    { time: '7:00 PM', available: true },
    { time: '7:30 PM', available: true }
  ],
  '2025-07-22': [
    { time: '9:00 AM', available: true },
    { time: '9:30 AM', available: true },
    { time: '10:00 AM', available: true },
    { time: '10:30 AM', available: true },
    { time: '11:00 AM', available: true },
    { time: '11:30 AM', available: true },
    { time: '12:00 PM', available: true },
    { time: '12:30 PM', available: true },
    { time: '1:00 PM', available: true },
    { time: '1:30 PM', available: true },
    { time: '2:00 PM', available: true },
    { time: '2:30 PM', available: true },
    { time: '3:00 PM', available: true },
    { time: '3:30 PM', available: true },
    { time: '4:00 PM', available: true },
    { time: '4:30 PM', available: true },
    { time: '5:00 PM', available: true },
    { time: '5:30 PM', available: true },
    { time: '6:00 PM', available: true },
    { time: '6:30 PM', available: true },
    { time: '7:00 PM', available: true },
    { time: '7:30 PM', available: true }
  ],
  '2025-07-23': [
    { time: '9:00 AM', available: true },
    { time: '9:30 AM', available: true },
    { time: '10:00 AM', available: true },
    { time: '10:30 AM', available: true },
    { time: '11:00 AM', available: true },
    { time: '11:30 AM', available: true },
    { time: '12:00 PM', available: true },
    { time: '12:30 PM', available: true },
    { time: '1:00 PM', available: true },
    { time: '1:30 PM', available: true },
    { time: '2:00 PM', available: true },
    { time: '2:30 PM', available: true },
    { time: '3:00 PM', available: true },
    { time: '3:30 PM', available: true },
    { time: '4:00 PM', available: true },
    { time: '4:30 PM', available: true },
    { time: '5:00 PM', available: true },
    { time: '5:30 PM', available: true },
    { time: '6:00 PM', available: true },
    { time: '6:30 PM', available: true },
    { time: '7:00 PM', available: true },
    { time: '7:30 PM', available: true }
  ],
  '2025-07-24': [
    { time: '9:00 AM', available: true },
    { time: '9:30 AM', available: true },
    { time: '10:00 AM', available: true },
    { time: '10:30 AM', available: true },
    { time: '11:00 AM', available: true },
    { time: '11:30 AM', available: true },
    { time: '12:00 PM', available: true },
    { time: '12:30 PM', available: true },
    { time: '1:00 PM', available: true },
    { time: '1:30 PM', available: true },
    { time: '2:00 PM', available: true },
    { time: '2:30 PM', available: true },
    { time: '3:00 PM', available: true },
    { time: '3:30 PM', available: true },
    { time: '4:00 PM', available: true },
    { time: '4:30 PM', available: true },
    { time: '5:00 PM', available: true },
    { time: '5:30 PM', available: true },
    { time: '6:00 PM', available: true },
    { time: '6:30 PM', available: true },
    { time: '7:00 PM', available: true },
    { time: '7:30 PM', available: true }
  ],
  '2025-07-25': [
    { time: '9:00 AM', available: true },
    { time: '9:30 AM', available: true },
    { time: '10:00 AM', available: true },
    { time: '10:30 AM', available: true },
    { time: '11:00 AM', available: true },
    { time: '11:30 AM', available: true },
    { time: '12:00 PM', available: true },
    { time: '12:30 PM', available: true },
    { time: '1:00 PM', available: true },
    { time: '1:30 PM', available: true },
    { time: '2:00 PM', available: true },
    { time: '2:30 PM', available: true },
    { time: '3:00 PM', available: true },
    { time: '3:30 PM', available: true },
    { time: '4:00 PM', available: true },
    { time: '5:30 PM', available: true },
    { time: '6:00 PM', available: true },
    { time: '6:30 PM', available: true },
    { time: '7:00 PM', available: true },
    { time: '7:30 PM', available: true }
  ],
  '2025-07-26': [
    { time: '9:00 AM', available: true },
    { time: '9:30 AM', available: true },
    { time: '10:00 AM', available: true },
    { time: '10:30 AM', available: true },
    { time: '11:00 AM', available: true },
    { time: '11:30 AM', available: true },
    { time: '12:00 PM', available: true },
    { time: '12:30 PM', available: true },
    { time: '1:00 PM', available: true },
    { time: '1:30 PM', available: true },
    { time: '2:00 PM', available: true },
    { time: '2:30 PM', available: true },
    { time: '3:00 PM', available: true },
    { time: '3:30 PM', available: true },
    { time: '4:00 PM', available: true },
    { time: '4:30 PM', available: true },
    { time: '5:00 PM', available: true },
    { time: '5:30 PM', available: true },
    { time: '6:00 PM', available: true },
    { time: '6:30 PM', available: true },
    { time: '7:00 PM', available: true },
    { time: '7:30 PM', available: true }
  ],
  '2025-07-27': [
    { time: '9:00 AM', available: true },
    { time: '9:30 AM', available: true },
    { time: '10:00 AM', available: true },
    { time: '10:30 AM', available: true },
    { time: '11:00 AM', available: true },
    { time: '11:30 AM', available: true },
    { time: '12:00 PM', available: true },
    { time: '12:30 PM', available: true },
    { time: '1:00 PM', available: true },
    { time: '1:30 PM', available: true },
    { time: '2:00 PM', available: true },
    { time: '2:30 PM', available: true },
    { time: '3:00 PM', available: true },
    { time: '3:30 PM', available: true },
    { time: '4:00 PM', available: true },
    { time: '4:30 PM', available: true },
    { time: '5:00 PM', available: true },
    { time: '5:30 PM', available: true },
    { time: '6:00 PM', available: true },
    { time: '6:30 PM', available: true },
    { time: '7:00 PM', available: true },
    { time: '7:30 PM', available: true }
  ],
  '2025-07-28': [
    { time: '9:00 AM', available: true },
    { time: '9:30 AM', available: true },
    { time: '10:00 AM', available: true },
    { time: '10:30 AM', available: true },
    { time: '11:00 AM', available: true },
    { time: '11:30 AM', available: true },
    { time: '12:00 PM', available: true },
    { time: '12:30 PM', available: true },
    { time: '2:00 PM', available: true },
    { time: '2:30 PM', available: true },
    { time: '3:00 PM', available: true },
    { time: '3:30 PM', available: true },
    { time: '4:00 PM', available: true },
    { time: '4:30 PM', available: true },
    { time: '5:00 PM', available: true },
    { time: '5:30 PM', available: true },
    { time: '6:00 PM', available: true },
    { time: '6:30 PM', available: true },
    { time: '7:00 PM', available: true },
    { time: '7:30 PM', available: true }
  ],
  '2025-07-29': [
    { time: '9:00 AM', available: true },
    { time: '9:30 AM', available: true },
    { time: '10:00 AM', available: true },
    { time: '10:30 AM', available: true },
    { time: '11:00 AM', available: true },
    { time: '11:30 AM', available: true },
    { time: '12:00 PM', available: true },
    { time: '12:30 PM', available: true },
    { time: '2:00 PM', available: true },
    { time: '2:30 PM', available: true },
    { time: '3:00 PM', available: true },
    { time: '3:30 PM', available: true },
    { time: '4:00 PM', available: true },
    { time: '5:30 PM', available: true },
    { time: '6:00 PM', available: true },
    { time: '6:30 PM', available: true },
    { time: '7:00 PM', available: true },
    { time: '7:30 PM', available: true }
  ],
  '2025-07-30': [
    { time: '9:00 AM', available: true },
    { time: '9:30 AM', available: true },
    { time: '10:00 AM', available: true },
    { time: '10:30 AM', available: true },
    { time: '11:00 AM', available: true },
    { time: '11:30 AM', available: true },
    { time: '12:00 PM', available: true },
    { time: '12:30 PM', available: true },
    { time: '2:00 PM', available: true },
    { time: '2:30 PM', available: true },
    { time: '3:00 PM', available: true },
    { time: '3:30 PM', available: true },
    { time: '4:00 PM', available: true },
    { time: '4:30 PM', available: true },
    { time: '5:00 PM', available: true },
    { time: '5:30 PM', available: true },
    { time: '6:00 PM', available: true },
    { time: '6:30 PM', available: true },
    { time: '7:00 PM', available: true },
    { time: '7:30 PM', available: true }
  ],
  '2025-07-31': [
    { time: '9:00 AM', available: true },
    { time: '9:30 AM', available: true },
    { time: '10:00 AM', available: true },
    { time: '10:30 AM', available: true },
    { time: '11:00 AM', available: true },
    { time: '11:30 AM', available: true },
    { time: '12:00 PM', available: true },
    { time: '12:30 PM', available: true },
    { time: '2:00 PM', available: true },
    { time: '2:30 PM', available: true },
    { time: '3:00 PM', available: true },
    { time: '3:30 PM', available: true },
    { time: '4:00 PM', available: true },
    { time: '4:30 PM', available: true },
    { time: '5:00 PM', available: true },
    { time: '5:30 PM', available: true },
    { time: '6:00 PM', available: true },
    { time: '6:30 PM', available: true },
    { time: '7:00 PM', available: true },
    { time: '7:30 PM', available: true }
  ],
  '2025-08-01': [
    { time: '9:00 AM', available: true },
    { time: '9:30 AM', available: true },
    { time: '10:00 AM', available: true },
    { time: '10:30 AM', available: true },
    { time: '11:00 AM', available: true },
    { time: '11:30 AM', available: true },
    { time: '12:00 PM', available: true },
    { time: '12:30 PM', available: true },
    { time: '2:00 PM', available: true },
    { time: '2:30 PM', available: true },
    { time: '3:00 PM', available: true },
    { time: '3:30 PM', available: true },
    { time: '4:00 PM', available: true },
    { time: '4:30 PM', available: true },
    { time: '5:00 PM', available: true },
    { time: '5:30 PM', available: true },
    { time: '6:00 PM', available: true },
    { time: '6:30 PM', available: true },
    { time: '7:00 PM', available: true },
    { time: '7:30 PM', available: true }
  ],
  '2025-08-02': [
    { time: '9:00 AM', available: true },
    { time: '9:30 AM', available: true },
    { time: '10:00 AM', available: true },
    { time: '10:30 AM', available: true },
    { time: '11:00 AM', available: true },
    { time: '11:30 AM', available: true },
    { time: '12:00 PM', available: true },
    { time: '12:30 PM', available: true },
    { time: '1:00 PM', available: true },
    { time: '1:30 PM', available: true },
    { time: '2:00 PM', available: true },
    { time: '2:30 PM', available: true },
    { time: '3:00 PM', available: true },
    { time: '3:30 PM', available: true },
    { time: '4:00 PM', available: true },
    { time: '4:30 PM', available: true },
    { time: '5:00 PM', available: true },
    { time: '5:30 PM', available: true },
    { time: '6:00 PM', available: true },
    { time: '6:30 PM', available: true },
    { time: '7:00 PM', available: true },
    { time: '7:30 PM', available: true }
  ],
  '2025-08-03': [
    { time: '9:00 AM', available: true },
    { time: '9:30 AM', available: true },
    { time: '10:00 AM', available: true },
    { time: '10:30 AM', available: true },
    { time: '11:00 AM', available: true },
    { time: '11:30 AM', available: true },
    { time: '12:00 PM', available: true },
    { time: '12:30 PM', available: true },
    { time: '1:00 PM', available: true },
    { time: '1:30 PM', available: true },
    { time: '2:00 PM', available: true },
    { time: '2:30 PM', available: true },
    { time: '3:00 PM', available: true },
    { time: '3:30 PM', available: true },
    { time: '4:00 PM', available: true },
    { time: '4:30 PM', available: true },
    { time: '5:00 PM', available: true },
    { time: '5:30 PM', available: true },
    { time: '6:00 PM', available: true },
    { time: '6:30 PM', available: true },
    { time: '7:00 PM', available: true },
    { time: '7:30 PM', available: true }
  ],
  '2025-08-04': [
    { time: '9:00 AM', available: true },
    { time: '9:30 AM', available: true },
    { time: '10:00 AM', available: true },
    { time: '10:30 AM', available: true },
    { time: '11:00 AM', available: true },
    { time: '11:30 AM', available: true },
    { time: '12:00 PM', available: true },
    { time: '12:30 PM', available: true },
    { time: '1:00 PM', available: true },
    { time: '1:30 PM', available: true },
    { time: '2:00 PM', available: true },
    { time: '2:30 PM', available: true },
    { time: '3:00 PM', available: true },
    { time: '3:30 PM', available: true },
    { time: '4:00 PM', available: true },
    { time: '4:30 PM', available: true },
    { time: '5:00 PM', available: true },
    { time: '5:30 PM', available: true },
    { time: '6:00 PM', available: true },
    { time: '6:30 PM', available: true },
    { time: '7:00 PM', available: true },
    { time: '7:30 PM', available: true }
  ],
  '2025-08-05': [
    { time: '9:00 AM', available: true },
    { time: '9:30 AM', available: true },
    { time: '10:00 AM', available: true },
    { time: '10:30 AM', available: true },
    { time: '11:00 AM', available: true },
    { time: '11:30 AM', available: true },
    { time: '12:00 PM', available: true },
    { time: '12:30 PM', available: true },
    { time: '1:00 PM', available: true },
    { time: '1:30 PM', available: true },
    { time: '2:00 PM', available: true },
    { time: '2:30 PM', available: true },
    { time: '3:00 PM', available: true },
    { time: '3:30 PM', available: true },
    { time: '4:00 PM', available: true },
    { time: '4:30 PM', available: true },
    { time: '5:00 PM', available: true },
    { time: '5:30 PM', available: true },
    { time: '6:00 PM', available: true },
    { time: '6:30 PM', available: true },
    { time: '7:00 PM', available: true },
    { time: '7:30 PM', available: true }
  ],
  '2025-08-06': [
    { time: '9:00 AM', available: true },
    { time: '9:30 AM', available: true },
    { time: '10:00 AM', available: true },
    { time: '10:30 AM', available: true },
    { time: '11:00 AM', available: true },
    { time: '11:30 AM', available: true },
    { time: '12:00 PM', available: true },
    { time: '12:30 PM', available: true },
    { time: '1:00 PM', available: true },
    { time: '1:30 PM', available: true },
    { time: '2:00 PM', available: true },
    { time: '2:30 PM', available: true },
    { time: '3:00 PM', available: true },
    { time: '3:30 PM', available: true },
    { time: '4:00 PM', available: true },
    { time: '4:30 PM', available: true },
    { time: '5:00 PM', available: true },
    { time: '5:30 PM', available: true },
    { time: '6:00 PM', available: true },
    { time: '6:30 PM', available: true },
    { time: '7:00 PM', available: true },
    { time: '7:30 PM', available: true }
  ],
  '2025-08-07': [
    { time: '9:00 AM', available: true },
    { time: '9:30 AM', available: true },
    { time: '10:00 AM', available: true },
    { time: '10:30 AM', available: true },
    { time: '11:00 AM', available: true },
    { time: '11:30 AM', available: true },
    { time: '12:00 PM', available: true },
    { time: '12:30 PM', available: true },
    { time: '1:00 PM', available: true },
    { time: '1:30 PM', available: true },
    { time: '2:00 PM', available: true },
    { time: '2:30 PM', available: true },
    { time: '3:00 PM', available: true },
    { time: '3:30 PM', available: true },
    { time: '4:00 PM', available: true },
    { time: '4:30 PM', available: true },
    { time: '5:00 PM', available: true },
    { time: '5:30 PM', available: true },
    { time: '6:00 PM', available: true },
    { time: '6:30 PM', available: true },
    { time: '7:00 PM', available: true },
    { time: '7:30 PM', available: true }
  ],
  '2025-08-08': [
    { time: '9:00 AM', available: true },
    { time: '9:30 AM', available: true },
    { time: '10:00 AM', available: true },
    { time: '10:30 AM', available: true },
    { time: '11:00 AM', available: true },
    { time: '11:30 AM', available: true },
    { time: '12:00 PM', available: true },
    { time: '12:30 PM', available: true },
    { time: '1:00 PM', available: true },
    { time: '1:30 PM', available: true },
    { time: '2:00 PM', available: true },
    { time: '2:30 PM', available: true },
    { time: '3:00 PM', available: true },
    { time: '3:30 PM', available: true },
    { time: '4:00 PM', available: true },
    { time: '5:30 PM', available: true },
    { time: '6:00 PM', available: true },
    { time: '6:30 PM', available: true },
    { time: '7:00 PM', available: true },
    { time: '7:30 PM', available: true }
  ],
  '2025-08-09': [
    { time: '9:00 AM', available: true },
    { time: '9:30 AM', available: true },
    { time: '10:00 AM', available: true },
    { time: '10:30 AM', available: true },
    { time: '11:00 AM', available: true },
    { time: '11:30 AM', available: true },
    { time: '12:00 PM', available: true },
    { time: '12:30 PM', available: true },
    { time: '1:00 PM', available: true },
    { time: '1:30 PM', available: true },
    { time: '2:00 PM', available: true },
    { time: '2:30 PM', available: true },
    { time: '3:00 PM', available: true },
    { time: '3:30 PM', available: true },
    { time: '4:00 PM', available: true },
    { time: '4:30 PM', available: true },
    { time: '5:00 PM', available: true },
    { time: '5:30 PM', available: true },
    { time: '6:00 PM', available: true },
    { time: '6:30 PM', available: true },
    { time: '7:00 PM', available: true },
    { time: '7:30 PM', available: true }
  ],
  '2025-08-10': [
    { time: '9:00 AM', available: true },
    { time: '9:30 AM', available: true },
    { time: '10:00 AM', available: true },
    { time: '10:30 AM', available: true },
    { time: '11:00 AM', available: true },
    { time: '11:30 AM', available: true },
    { time: '12:00 PM', available: true },
    { time: '12:30 PM', available: true },
    { time: '1:00 PM', available: true },
    { time: '1:30 PM', available: true },
    { time: '2:00 PM', available: true },
    { time: '2:30 PM', available: true },
    { time: '3:00 PM', available: true },
    { time: '3:30 PM', available: true },
    { time: '4:00 PM', available: true },
    { time: '4:30 PM', available: true },
    { time: '5:00 PM', available: true },
    { time: '5:30 PM', available: true },
    { time: '6:00 PM', available: true },
    { time: '6:30 PM', available: true },
    { time: '7:00 PM', available: true },
    { time: '7:30 PM', available: true }
  ],
  '2025-08-11': [
    { time: '9:00 AM', available: true },
    { time: '9:30 AM', available: true },
    { time: '10:00 AM', available: true },
    { time: '10:30 AM', available: true },
    { time: '11:00 AM', available: true },
    { time: '11:30 AM', available: true },
    { time: '12:00 PM', available: true },
    { time: '12:30 PM', available: true },
    { time: '1:00 PM', available: true },
    { time: '1:30 PM', available: true },
    { time: '2:00 PM', available: true },
    { time: '2:30 PM', available: true },
    { time: '3:00 PM', available: true },
    { time: '3:30 PM', available: true },
    { time: '4:00 PM', available: true },
    { time: '4:30 PM', available: true },
    { time: '5:00 PM', available: true },
    { time: '5:30 PM', available: true },
    { time: '6:00 PM', available: true },
    { time: '6:30 PM', available: true },
    { time: '7:00 PM', available: true },
    { time: '7:30 PM', available: true }
  ],
  '2025-08-12': [
    { time: '9:00 AM', available: true },
    { time: '9:30 AM', available: true },
    { time: '10:00 AM', available: true },
    { time: '10:30 AM', available: true },
    { time: '11:00 AM', available: true },
    { time: '11:30 AM', available: true },
    { time: '12:00 PM', available: true },
    { time: '12:30 PM', available: true },
    { time: '1:00 PM', available: true },
    { time: '1:30 PM', available: true },
    { time: '2:00 PM', available: true },
    { time: '2:30 PM', available: true },
    { time: '3:00 PM', available: true },
    { time: '3:30 PM', available: true },
    { time: '4:00 PM', available: true },
    { time: '4:30 PM', available: true },
    { time: '5:00 PM', available: true },
    { time: '5:30 PM', available: true },
    { time: '6:00 PM', available: true },
    { time: '6:30 PM', available: true },
    { time: '7:00 PM', available: true },
    { time: '7:30 PM', available: true }
  ],
  '2025-08-13': [
    { time: '9:00 AM', available: true },
    { time: '9:30 AM', available: true },
    { time: '10:00 AM', available: true },
    { time: '10:30 AM', available: true },
    { time: '11:00 AM', available: true },
    { time: '11:30 AM', available: true },
    { time: '12:00 PM', available: true },
    { time: '12:30 PM', available: true },
    { time: '1:00 PM', available: true },
    { time: '1:30 PM', available: true },
    { time: '2:00 PM', available: true },
    { time: '2:30 PM', available: true },
    { time: '3:00 PM', available: true },
    { time: '3:30 PM', available: true },
    { time: '4:00 PM', available: true },
    { time: '4:30 PM', available: true },
    { time: '5:00 PM', available: true },
    { time: '5:30 PM', available: true },
    { time: '6:00 PM', available: true },
    { time: '6:30 PM', available: true },
    { time: '7:00 PM', available: true },
    { time: '7:30 PM', available: true }
  ],
  '2025-08-14': [
    { time: '9:00 AM', available: true },
    { time: '9:30 AM', available: true },
    { time: '10:00 AM', available: true },
    { time: '10:30 AM', available: true },
    { time: '11:00 AM', available: true },
    { time: '11:30 AM', available: true },
    { time: '12:00 PM', available: true },
    { time: '12:30 PM', available: true },
    { time: '1:00 PM', available: true },
    { time: '1:30 PM', available: true },
    { time: '2:00 PM', available: true },
    { time: '2:30 PM', available: true },
    { time: '3:00 PM', available: true },
    { time: '3:30 PM', available: true },
    { time: '4:00 PM', available: true },
    { time: '4:30 PM', available: true },
    { time: '5:00 PM', available: true },
    { time: '5:30 PM', available: true },
    { time: '6:00 PM', available: true },
    { time: '6:30 PM', available: true },
    { time: '7:00 PM', available: true },
    { time: '7:30 PM', available: true }
  ],
  '2025-08-15': [
    { time: '9:00 AM', available: true },
    { time: '9:30 AM', available: true },
    { time: '10:00 AM', available: true },
    { time: '10:30 AM', available: true },
    { time: '11:00 AM', available: true },
    { time: '11:30 AM', available: true },
    { time: '12:00 PM', available: true },
    { time: '12:30 PM', available: true },
    { time: '1:00 PM', available: true },
    { time: '1:30 PM', available: true },
    { time: '2:00 PM', available: true },
    { time: '2:30 PM', available: true },
    { time: '3:00 PM', available: true },
    { time: '3:30 PM', available: true },
    { time: '4:00 PM', available: true },
    { time: '5:30 PM', available: true },
    { time: '6:00 PM', available: true },
    { time: '6:30 PM', available: true },
    { time: '7:00 PM', available: true },
    { time: '7:30 PM', available: true }
  ],
  '2025-08-16': [
    { time: '9:00 AM', available: true },
    { time: '9:30 AM', available: true },
    { time: '10:00 AM', available: true },
    { time: '10:30 AM', available: true },
    { time: '11:00 AM', available: true },
    { time: '11:30 AM', available: true },
    { time: '12:00 PM', available: true },
    { time: '12:30 PM', available: true },
    { time: '1:00 PM', available: true },
    { time: '1:30 PM', available: true },
    { time: '2:00 PM', available: true },
    { time: '2:30 PM', available: true },
    { time: '3:00 PM', available: true },
    { time: '3:30 PM', available: true },
    { time: '4:00 PM', available: true },
    { time: '4:30 PM', available: true },
    { time: '5:00 PM', available: true },
    { time: '5:30 PM', available: true },
    { time: '6:00 PM', available: true },
    { time: '6:30 PM', available: true },
    { time: '7:00 PM', available: true },
    { time: '7:30 PM', available: true }
  ],
  '2025-08-17': [
    { time: '9:00 AM', available: true },
    { time: '9:30 AM', available: true },
    { time: '10:00 AM', available: true },
    { time: '10:30 AM', available: true },
    { time: '11:00 AM', available: true },
    { time: '11:30 AM', available: true },
    { time: '12:00 PM', available: true },
    { time: '12:30 PM', available: true },
    { time: '1:00 PM', available: true },
    { time: '1:30 PM', available: true },
    { time: '2:00 PM', available: true },
    { time: '2:30 PM', available: true },
    { time: '3:00 PM', available: true },
    { time: '3:30 PM', available: true },
    { time: '4:00 PM', available: true },
    { time: '4:30 PM', available: true },
    { time: '5:00 PM', available: true },
    { time: '5:30 PM', available: true },
    { time: '6:00 PM', available: true },
    { time: '6:30 PM', available: true },
    { time: '7:00 PM', available: true },
    { time: '7:30 PM', available: true }
  ],
  '2025-08-18': [
    { time: '9:00 AM', available: true },
    { time: '9:30 AM', available: true },
    { time: '10:00 AM', available: true },
    { time: '10:30 AM', available: true },
    { time: '11:00 AM', available: true },
    { time: '11:30 AM', available: true },
    { time: '12:00 PM', available: true },
    { time: '12:30 PM', available: true },
    { time: '1:00 PM', available: true },
    { time: '1:30 PM', available: true },
    { time: '2:00 PM', available: true },
    { time: '2:30 PM', available: true },
    { time: '3:00 PM', available: true },
    { time: '3:30 PM', available: true },
    { time: '4:00 PM', available: true },
    { time: '4:30 PM', available: true },
    { time: '5:00 PM', available: true },
    { time: '5:30 PM', available: true },
    { time: '6:00 PM', available: true },
    { time: '6:30 PM', available: true },
    { time: '7:00 PM', available: true },
    { time: '7:30 PM', available: true }
  ],
  '2025-08-19': [
    { time: '9:00 AM', available: true },
    { time: '9:30 AM', available: true },
    { time: '10:00 AM', available: true },
    { time: '10:30 AM', available: true },
    { time: '11:00 AM', available: true },
    { time: '11:30 AM', available: true },
    { time: '12:00 PM', available: true },
    { time: '12:30 PM', available: true },
    { time: '1:00 PM', available: true },
    { time: '1:30 PM', available: true },
    { time: '2:00 PM', available: true },
    { time: '2:30 PM', available: true },
    { time: '3:00 PM', available: true },
    { time: '3:30 PM', available: true },
    { time: '4:00 PM', available: true },
    { time: '4:30 PM', available: true },
    { time: '5:00 PM', available: true },
    { time: '5:30 PM', available: true },
    { time: '6:00 PM', available: true },
    { time: '6:30 PM', available: true },
    { time: '7:00 PM', available: true },
    { time: '7:30 PM', available: true }
  ],
  '2025-08-20': [
    { time: '9:00 AM', available: true },
    { time: '9:30 AM', available: true },
    { time: '10:00 AM', available: true },
    { time: '10:30 AM', available: true },
    { time: '11:00 AM', available: true },
    { time: '11:30 AM', available: true },
    { time: '12:00 PM', available: true },
    { time: '12:30 PM', available: true },
    { time: '1:00 PM', available: true },
    { time: '1:30 PM', available: true },
    { time: '2:00 PM', available: true },
    { time: '2:30 PM', available: true },
    { time: '3:00 PM', available: true },
    { time: '3:30 PM', available: true },
    { time: '4:00 PM', available: true },
    { time: '4:30 PM', available: true },
    { time: '5:00 PM', available: true },
    { time: '5:30 PM', available: true },
    { time: '6:00 PM', available: true },
    { time: '6:30 PM', available: true },
    { time: '7:00 PM', available: true },
    { time: '7:30 PM', available: true }
  ],
  '2025-08-21': [
    { time: '9:00 AM', available: true },
    { time: '9:30 AM', available: true },
    { time: '10:00 AM', available: true },
    { time: '10:30 AM', available: true },
    { time: '11:00 AM', available: true },
    { time: '11:30 AM', available: true },
    { time: '12:00 PM', available: true },
    { time: '12:30 PM', available: true },
    { time: '1:00 PM', available: true },
    { time: '1:30 PM', available: true },
    { time: '2:00 PM', available: true },
    { time: '2:30 PM', available: true },
    { time: '3:00 PM', available: true },
    { time: '3:30 PM', available: true },
    { time: '4:00 PM', available: true },
    { time: '4:30 PM', available: true },
    { time: '5:00 PM', available: true },
    { time: '5:30 PM', available: true },
    { time: '6:00 PM', available: true },
    { time: '6:30 PM', available: true },
    { time: '7:00 PM', available: true },
    { time: '7:30 PM', available: true }
  ],
  '2025-08-22': [
    { time: '9:00 AM', available: true },
    { time: '9:30 AM', available: true },
    { time: '10:00 AM', available: true },
    { time: '10:30 AM', available: true },
    { time: '11:00 AM', available: true },
    { time: '11:30 AM', available: true },
    { time: '12:00 PM', available: true },
    { time: '12:30 PM', available: true },
    { time: '1:00 PM', available: true },
    { time: '1:30 PM', available: true },
    { time: '2:00 PM', available: true },
    { time: '2:30 PM', available: true },
    { time: '3:00 PM', available: true },
    { time: '3:30 PM', available: true },
    { time: '4:00 PM', available: true },
    { time: '5:30 PM', available: true },
    { time: '6:00 PM', available: true },
    { time: '6:30 PM', available: true },
    { time: '7:00 PM', available: true },
    { time: '7:30 PM', available: true }
  ],
  '2025-08-23': [
    { time: '9:00 AM', available: true },
    { time: '9:30 AM', available: true },
    { time: '10:00 AM', available: true },
    { time: '10:30 AM', available: true },
    { time: '11:00 AM', available: true },
    { time: '11:30 AM', available: true },
    { time: '12:00 PM', available: true },
    { time: '12:30 PM', available: true },
    { time: '1:00 PM', available: true },
    { time: '1:30 PM', available: true },
    { time: '2:00 PM', available: true },
    { time: '2:30 PM', available: true },
    { time: '3:00 PM', available: true },
    { time: '3:30 PM', available: true },
    { time: '4:00 PM', available: true },
    { time: '4:30 PM', available: true },
    { time: '5:00 PM', available: true },
    { time: '5:30 PM', available: true },
    { time: '6:00 PM', available: true },
    { time: '6:30 PM', available: true },
    { time: '7:00 PM', available: true },
    { time: '7:30 PM', available: true }
  ],
  '2025-08-24': [
    { time: '9:00 AM', available: true },
    { time: '9:30 AM', available: true },
    { time: '10:00 AM', available: true },
    { time: '10:30 AM', available: true },
    { time: '11:00 AM', available: true },
    { time: '11:30 AM', available: true },
    { time: '12:00 PM', available: true },
    { time: '12:30 PM', available: true },
    { time: '1:00 PM', available: true },
    { time: '1:30 PM', available: true },
    { time: '2:00 PM', available: true },
    { time: '2:30 PM', available: true },
    { time: '3:00 PM', available: true },
    { time: '3:30 PM', available: true },
    { time: '4:00 PM', available: true },
    { time: '4:30 PM', available: true },
    { time: '5:00 PM', available: true },
    { time: '5:30 PM', available: true },
    { time: '6:00 PM', available: true },
    { time: '6:30 PM', available: true },
    { time: '7:00 PM', available: true },
    { time: '7:30 PM', available: true }
  ],
  '2025-08-25': [
    { time: '9:00 AM', available: true },
    { time: '9:30 AM', available: true },
    { time: '10:00 AM', available: true },
    { time: '10:30 AM', available: true },
    { time: '11:00 AM', available: true },
    { time: '11:30 AM', available: true },
    { time: '12:00 PM', available: true },
    { time: '12:30 PM', available: true },
    { time: '1:00 PM', available: true },
    { time: '1:30 PM', available: true },
    { time: '2:00 PM', available: true },
    { time: '2:30 PM', available: true },
    { time: '3:00 PM', available: true },
    { time: '3:30 PM', available: true },
    { time: '4:00 PM', available: true },
    { time: '4:30 PM', available: true },
    { time: '5:00 PM', available: true },
    { time: '5:30 PM', available: true },
    { time: '6:00 PM', available: true },
    { time: '6:30 PM', available: true },
    { time: '7:00 PM', available: true },
    { time: '7:30 PM', available: true }
  ],
  '2025-08-26': [
    { time: '9:00 AM', available: true },
    { time: '9:30 AM', available: true },
    { time: '10:00 AM', available: true },
    { time: '10:30 AM', available: true },
    { time: '11:00 AM', available: true },
    { time: '11:30 AM', available: true },
    { time: '12:00 PM', available: true },
    { time: '12:30 PM', available: true },
    { time: '1:00 PM', available: true },
    { time: '1:30 PM', available: true },
    { time: '2:00 PM', available: true },
    { time: '2:30 PM', available: true },
    { time: '3:00 PM', available: true },
    { time: '3:30 PM', available: true },
    { time: '4:00 PM', available: true },
    { time: '5:30 PM', available: true },
    { time: '6:00 PM', available: true },
    { time: '6:30 PM', available: true },
    { time: '7:00 PM', available: true },
    { time: '7:30 PM', available: true }
  ],
  '2025-08-27': [
    { time: '9:00 AM', available: true },
    { time: '9:30 AM', available: true },
    { time: '10:00 AM', available: true },
    { time: '10:30 AM', available: true },
    { time: '11:00 AM', available: true },
    { time: '11:30 AM', available: true },
    { time: '12:00 PM', available: true },
    { time: '12:30 PM', available: true },
    { time: '1:00 PM', available: true },
    { time: '1:30 PM', available: true },
    { time: '2:00 PM', available: true },
    { time: '2:30 PM', available: true },
    { time: '3:00 PM', available: true },
    { time: '3:30 PM', available: true },
    { time: '4:00 PM', available: true },
    { time: '4:30 PM', available: true },
    { time: '5:00 PM', available: true },
    { time: '5:30 PM', available: true },
    { time: '6:00 PM', available: true },
    { time: '6:30 PM', available: true },
    { time: '7:00 PM', available: true },
    { time: '7:30 PM', available: true }
  ],
  '2025-08-28': [
    { time: '9:00 AM', available: true },
    { time: '9:30 AM', available: true },
    { time: '10:00 AM', available: true },
    { time: '10:30 AM', available: true },
    { time: '11:00 AM', available: true },
    { time: '11:30 AM', available: true },
    { time: '12:00 PM', available: true },
    { time: '12:30 PM', available: true },
    { time: '1:00 PM', available: true },
    { time: '1:30 PM', available: true },
    { time: '2:00 PM', available: true },
    { time: '2:30 PM', available: true },
    { time: '3:00 PM', available: true },
    { time: '3:30 PM', available: true },
    { time: '4:00 PM', available: true },
    { time: '4:30 PM', available: true },
    { time: '5:00 PM', available: true },
    { time: '5:30 PM', available: true },
    { time: '6:00 PM', available: true },
    { time: '6:30 PM', available: true },
    { time: '7:00 PM', available: true },
    { time: '7:30 PM', available: true }
  ],
  '2025-08-29': [
    { time: '9:00 AM', available: true },
    { time: '9:30 AM', available: true },
    { time: '10:00 AM', available: true },
    { time: '10:30 AM', available: true },
    { time: '11:00 AM', available: true },
    { time: '11:30 AM', available: true },
    { time: '12:00 PM', available: true },
    { time: '12:30 PM', available: true },
    { time: '1:00 PM', available: true },
    { time: '1:30 PM', available: true },
    { time: '2:00 PM', available: true },
    { time: '2:30 PM', available: true },
    { time: '3:00 PM', available: true },
    { time: '3:30 PM', available: true },
    { time: '4:00 PM', available: true },
    { time: '4:30 PM', available: true },
    { time: '5:00 PM', available: true },
    { time: '5:30 PM', available: true },
    { time: '6:00 PM', available: true },
    { time: '6:30 PM', available: true },
    { time: '7:00 PM', available: true },
    { time: '7:30 PM', available: true }
  ],
  '2025-08-30': [
    { time: '9:00 AM', available: true },
    { time: '9:30 AM', available: true },
    { time: '10:00 AM', available: true },
    { time: '10:30 AM', available: true },
    { time: '11:00 AM', available: true },
    { time: '11:30 AM', available: true },
    { time: '12:00 PM', available: true },
    { time: '12:30 PM', available: true },
    { time: '1:00 PM', available: true },
    { time: '1:30 PM', available: true },
    { time: '2:00 PM', available: true },
    { time: '2:30 PM', available: true },
    { time: '3:00 PM', available: true },
    { time: '3:30 PM', available: true },
    { time: '4:00 PM', available: true },
    { time: '4:30 PM', available: true },
    { time: '5:00 PM', available: true },
    { time: '5:30 PM', available: true },
    { time: '6:00 PM', available: true },
    { time: '6:30 PM', available: true },
    { time: '7:00 PM', available: true },
    { time: '7:30 PM', available: true }
  ],
  '2025-08-31': [
    { time: '9:00 AM', available: true },
    { time: '9:30 AM', available: true },
    { time: '10:00 AM', available: true },
    { time: '10:30 AM', available: true },
    { time: '11:00 AM', available: true },
    { time: '11:30 AM', available: true },
    { time: '12:00 PM', available: true },
    { time: '12:30 PM', available: true },
    { time: '1:00 PM', available: true },
    { time: '1:30 PM', available: true },
    { time: '2:00 PM', available: true },
    { time: '2:30 PM', available: true },
    { time: '3:00 PM', available: true },
    { time: '3:30 PM', available: true },
    { time: '4:00 PM', available: true },
    { time: '4:30 PM', available: true },
    { time: '5:00 PM', available: true },
    { time: '5:30 PM', available: true },
    { time: '6:00 PM', available: true },
    { time: '6:30 PM', available: true },
    { time: '7:00 PM', available: true },
    { time: '7:30 PM', available: true }
  ],

};

const TimeSlotsPage = () => {
  const { date } = useParams(); // Get the selected date from the URL
  const timeSlots = availabilityData[date] || []; // Get the time slots for the selected date, or an empty array if no data exists for the date

  const [selectedTimes, setSelectedTimes] = useState([]); // State to track selected time slots
  const [selectedLessonType, setSelectedLessonType] = useState([]); // State to track selected lesson types
  const [contactInfo, setContactInfo] = useState({
    email: '',
    phone: '',
    additionalInfo: ''
  }); // State to track contact info and additional info

  const handleCheckboxChange = (time) => {
    setSelectedTimes((prevSelected) => {
      if (prevSelected.includes(time)) {
        // Deselect time
        return prevSelected.filter((selectedTime) => selectedTime !== time);
      } else {
        // Select time
        return [...prevSelected, time];
      }
    });
  };

  const handleLessonTypeChange = (type) => {
    setSelectedLessonType((prevSelected) => {
      if (prevSelected.includes(type)) {
        // Deselect lesson type
        return prevSelected.filter((selectedType) => selectedType !== type);
      } else {
        // Select lesson type
        return [...prevSelected, type];
      }
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };


  const navigate = useNavigate(); // Initialize navigate

  // Submit form and send email via EmailJS
  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare the message content
    const message = `
      Date: ${date}
      Selected Time Slots: ${selectedTimes.join(', ')}
      Lesson Type: ${selectedLessonType.join(', ')}
      Email: ${contactInfo.email}
      Phone: ${contactInfo.phone}
      Additional Information: ${contactInfo.additionalInfo}
    `;

    const templateParams = {
      to_email: 'macswimschooloakville@gmail.com', // The recipient email address
      message,
      email: contactInfo.email,
      phone: contactInfo.phone,
      additionalInfo: contactInfo.additionalInfo,
    };

    // Send email using EmailJS
    emailjs
      .send('service_kud0e99', 'template_46ag35e', templateParams, 'D1U_HMhnLbz8Ryzb4') // Use your actual template_id here
      .then(
        (response) => {
          alert('Your booking has been submitted!');
          console.log(response);
          navigate('/');
        },
        (error) => {
          alert('Failed to send the email. Please try again later.');
          console.log(error);
        }
      );


  };

  return (
    
    <div className="container">

      <div className="form-container">
        {/* Top-right button to go back to homepage */}
        <button 
          className="top-right-button" 
          onClick={() => navigate('/')}
        >
          Home
        </button>


        <h1>Time Slots for {date}</h1>

        {/* Time Slot Selection */}
        {timeSlots.length > 0 ? (
          <ul className="time-slot-list">
            {timeSlots.map((slot, index) => (
              <li key={index}>
                {slot.available ? (
                  <>
                    <input
                      type="checkbox"
                      id={`slot-${index}`}
                      checked={selectedTimes.includes(slot.time)}
                      onChange={() => handleCheckboxChange(slot.time)}
                    />
                    <label htmlFor={`slot-${index}`}>{slot.time} - {slot.available ? 'Available' : 'Not Available'}</label>
                  </>
                ) : (
                  <span>{slot.time} - Not Available</span>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p>No time slots available for this day.</p>
        )}

        {/* Lesson Type Selection */}
        <div className="checkbox-section">
          <h3>Select Lesson Type:</h3>
          <ul className="lesson-type-list">
            {['Weekly', 'Week long', 'One time'].map((type, index) => (
              <li key={index}>
                <input
                  type="checkbox"
                  id={`lesson-${type}`}
                  checked={selectedLessonType.includes(type)}
                  onChange={() => handleLessonTypeChange(type)}
                />
                <label htmlFor={`lesson-${type}`}>{type} lessons</label>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Information */}
        <div className="contact-info">
          <h3>Contact Information:</h3>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={contactInfo.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
          />
          <br />
          <label htmlFor="phone">Phone Number (Optional):</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={contactInfo.phone}
            onChange={handleInputChange}
            placeholder="Enter your phone number"
          />
          <br />
          <label htmlFor="additionalInfo">Additional Information:</label>
          <textarea
            id="additionalInfo"
            name="additionalInfo"
            value={contactInfo.additionalInfo}
            onChange={handleInputChange}
            placeholder="Enter any additional information"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default TimeSlotsPage;
