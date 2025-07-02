// Pricing.js
import React from 'react';
import './pricing.css';

const Pricing = () => {
  return (
    <section id="pricing">
      <h2 className="section-title">Pricing</h2>
      <p className="section-subtitle">Affordable packages tailored to your needs</p>
      <div className="pricing-cards">
        {/* Basic Plan */}
        <div className="price-card">
          <h3>Basic</h3>
          <p className="price">Ksh 5,000</p>
          <ul>
            <li>1-page website</li>
            <li>Mobile responsive</li>
            <li>Email support</li>
          </ul>
        </div>

        {/* Standard Plan */}
        <div className="price-card popular">
          <h3>Standard</h3>
          <p className="price">Ksh 10,000</p>
          <ul>
            <li>Multi-page website</li>
            <li>Custom design</li>
            <li>1 month support</li>
          </ul>
        </div>

        {/* Premium Plan */}
        <div className="price-card">
          <h3>Premium</h3>
          <p className="price">Ksh 15,000+</p>
          <ul>
            <li>Full branding</li>
            <li>Web + Graphic Design</li>
            <li>3 months support</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
