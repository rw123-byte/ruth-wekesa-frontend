import React from 'react';
import './services.css';

const Services = () => {
  return (
    <section className="services" id="services">
      <h2 className="section-title">My Services</h2>
      <div className="services-container">
        <div className="service-card">
          <h3>Web Development</h3>
          <p>
            I build responsive and dynamic websites using modern tools like React, Node.js, MongoDB, and Tailwind CSS.
            I focus on performance, user experience, and clean code.
          </p>
        </div>

        <div className="service-card">
          <h3>Graphic Design</h3>
          <p>
            From logos to posters, I create visually compelling graphics that reflect brand identity
            and communicate messages effectively.
          </p>
        </div>

        <div className="service-card">
          <h3>UI/UX Design</h3>
          <p>
            I design user interfaces that are clean, intuitive, and user-friendly — keeping both aesthetics and usability in mind.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Services;
