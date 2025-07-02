
import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3 className="logo">Ruth Wekesa</h3>
        <p className="tagline">Designing. Developing. Delivering.</p>

        <ul className="footer-links">
          <li><a href="#hero">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="footer-socials">
          <a href="mailto:ruthcw04@gmail.com">Email</a>
          <a href="https://github.com/rw123-byte" target="_blank" rel="noreffer">GitHub</a>
          <a href="https://www.linkedin.com/in/ruth-wekesa-b352b2236?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreffer">LinkedIn</a>
        </div>
      </div>

      <p className="footer-bottom">© {new Date().getFullYear()} Ruth Wekesa. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
