// AboutMe.js
import React from 'react';
import plan from '../images/ReedPlan.jpg';
import '../styles/SwimLessons.css';


const SwimLessons = () => {
  return (
    <section id="swim-lessons" className="the-lessons-section">
      <div className="plan-container">
        <img src={plan} alt="paymentPlan" className="plan" />
      </div>

    </section>
  );
}

export default SwimLessons;
