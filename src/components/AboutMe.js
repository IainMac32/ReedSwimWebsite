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
          <p>Hey there! I'm Reed, a high school student who's also a Certified Lifeguard with a passion for swimming. I've been immersed in the world of aquatics for as long as I can remember, and now I'm thrilled to share my love for the water through my own swim school. Whether you're just dipping your toes or diving into competitive strokes, I'm here to make every lesson a splashin' success!</p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
