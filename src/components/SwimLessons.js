// AboutMe.js
import React from 'react';
import plan1 from '../images/ReedPlan1.jpg';
import plan2 from '../images/ReedPlan2.jpg';
import '../styles/SwimLessons.css';


const SwimLessons = () => {
  return (
    <section id="swim-lessons" className="the-lessons-section">
      <div className="plan-container">
        <img src={plan1} alt="paymentPlan1" className="plan1" />
        <img src={plan2} alt="paymentPlan2" className="plan2" />
      </div>

    </section>
  );
}

export default SwimLessons;
