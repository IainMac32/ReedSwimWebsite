// SwimLessons.js
import React from 'react';
import '../styles/SwimLessons.css';

const SwimLessons = () => {
    const lessonPlans = [
        {
            title: "Week Long Plan",
            description: (
              <>
                Beginner to Pro<br />
                Ages 2 and up<br />
                30-minute lessons
              </>
            ),
            price: "$225 per week"
        },
        
        {
            title: "Weekly Plan",
            description: (
              <>
                Beginner to Pro<br />
                Ages 2 and up<br />
                30-minute lessons
              </>
            ),
            price: "$40 per lesson"
        }
    ];

    return (
        <section id="swim-lessons" className="the-lessons-section">
            <div className="plan-container">
                {lessonPlans.map((plan, index) => (
                    <div key={index} className="lesson-card">
                        <h2>{plan.title}</h2>
                        <p>{plan.description}</p>
                        <p className="lesson-price">{plan.price}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default SwimLessons;
