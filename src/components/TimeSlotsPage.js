import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate
import emailjs from 'emailjs-com'; // Import EmailJS
import '../styles/TimeSlot.css';

// Example availability data for each day (July 1 to August 31)
const availabilityData = {
  '2025-07-01': [
    { time: '9:00 AM', available: true },
    { time: '10:00 AM', available: false },
    { time: '11:00 AM', available: true },
    { time: '12:00 PM', available: false },
  ],
  '2025-07-02': [
    { time: '9:00 AM', available: true },
    { time: '10:00 AM', available: true },
    { time: '11:00 AM', available: false },
    { time: '12:00 PM', available: true },
  ],
  // ... Add data for other dates in July and August
  '2025-08-31': [
    { time: '9:00 AM', available: true },
    { time: '10:00 AM', available: true },
    { time: '11:00 AM', available: true },
    { time: '12:00 PM', available: false },
  ]
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
      .send('service_slj47tf', 'template_46ag35e', templateParams, 'D1U_HMhnLbz8Ryzb4') // Use your actual template_id here
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
