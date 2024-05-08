// ThePool.js
import React, { useState } from 'react';
import pool1 from '../images/pool1.jpg';
import pool2 from '../images/pool2.jpg';
import pool3 from '../images/pool3.jpg';
import '../styles/ThePool.css';

const ThePool = () => {
  const [currentImage, setCurrentImage] = useState(pool1);

  const nextImage = () => {
    if (currentImage === pool1) {
      setCurrentImage(pool2);
    } else if (currentImage === pool2) {
      setCurrentImage(pool1);
    } else {
      setCurrentImage(pool1);
    }
  };

  const prevImage = () => {
    if (currentImage === pool1) {
      setCurrentImage(pool1);
    } else if (currentImage === pool2) {
      setCurrentImage(pool1);
    } else {
      setCurrentImage(pool2);
    }
  };

  return (
    <section id="the-pool" className="the-pool-section">
      <div className="pool-container">
        <img src={currentImage} alt="Pool" className="pool-image" />
        <div className="arrow-container">
          <button onClick={prevImage} className="arrow left-arrow">&#129184;</button>
          <button onClick={nextImage} className="arrow right-arrow">&#129185;</button>
        </div>
      </div>
    </section>
  );
};

export default ThePool;
