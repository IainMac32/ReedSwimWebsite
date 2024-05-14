// AboutMe.js
import React from 'react';
import lifeguardImage from '../images/lifeguard.jpg'; // Import the image
import '../styles/AboutMe.css'; // Import the CSS file for styling

const AboutMe = () => {
  return (
    <section id="about-me" className="about-me-section">
      <div className="about-me-content">
        <img src={lifeguardImage} alt="Lifeguard" className="lifeguard-image" />
        <div className="text-container">
          <p>Hey there! I'm Reed, a high school student who's also a Certified Swim Instructor with a passion for swimming. I've been immersed in the world of aquatics for about 5 years, and I'm thrilled to share my love for the water through my own swim school. I offer 1 on 1 week long sessions in a backyard pool!</p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
