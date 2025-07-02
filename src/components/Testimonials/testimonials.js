
import React from 'react';
import './testimonials.css';

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h2 className="section-title">Testimonials</h2>
      <div className="testimonial-container">
        <div className="testimonial">
          <p>"Ruth created a stunning website for our company. Highly recommended!"</p>
          <h4>- Peter Bahati, UoE</h4>
        </div>
        <div className="testimonial">
          <p>"Her designs are creative and impactful. I loved the logo she made for us."</p>
          <h4>- Catherine Muchuka</h4>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
