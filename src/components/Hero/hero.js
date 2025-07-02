import React from 'react';
import './hero.css';
import heroImage from '../../assets/hero.jpeg';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <div className="hero-text">
          <h2>Hello,</h2>
          <h1>
            I'm <span className="highlight">Ruth Wekesa</span>
          </h1>
          <p>
            I'm a passionate web developer and a graphic designer with a background in Computer Science. I have worked on real-world projects like a smart food spoilage detection system and a grocery eCommerce website. I love creating digital solutions that solve real problems and help people. I'm always eager to learn, grow, and build something meaningful.
          </p>
          <a href="#contact" className="hero-btn">Contact Me</a>
        </div>

        <div className="hero-img">
          <img src={heroImage} alt="Ruth Wekesa" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
