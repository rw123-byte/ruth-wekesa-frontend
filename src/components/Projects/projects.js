
import React from 'react';
import './projects.css';
import Iot from '../../assets/Iot.jpg';     
import Nft from '../../assets/Nft.jpg';     
import { FaGithub } from 'react-icons/fa';
import { SiVercel } from 'react-icons/si';

const Projects = () => {
  return (
    <section id="projects">
      <h2 className="section-title">Projects</h2>
      <p className="section-subtitle">These are some of the projects I have tackled</p>

      <div className="projects-container">
        <div className="project-card">
          <img src={Iot} alt="IoT Project" className="project-img" />
          <h3>Smart Food Spoilage Detection System</h3>
          <p>
            An IoT-based system designed to monitor food freshness in real-time using sensors and notify users of spoilage,
            reducing food waste and improving safety.
          </p>
          <p className="note">* Source code not uploaded publicly</p>
        </div>

        
        <div className="project-card">
          <img src={Nft} alt="NFT Marketplace App" className="project-img" />
          <h3>NFT Art Marketplace</h3>
          <p>
            A full-stack NFT application that allows users to create, upload, list, buy, and sell digital artwork NFTs.
            Built with modern web technologies for artists and collectors.
          </p>
           <div className="project-icons">
            <a href="https://github.com/rw123-byte/R-nft-marketplace" target="_blank" rel="noreffer">
              <FaGithub className="icon" title="GitHub Repo" />
            </a>
            <a href="https://r-nft-marketplace.vercel.app/home" target="_blank" rel="noreffer">
              <SiVercel className="icon" title="Live on Vercel" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
