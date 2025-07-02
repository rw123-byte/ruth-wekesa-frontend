import React from "react";
import './services.css';

const Services = () => {
    return (
        <section id= 'services'>
            <h2 className="section title">Services</h2>
            <div className="services-container">
                <div className="service-card">
                    <h3 >Web Development</h3>
                    <p>I build responsive and user-friendly websites using React,tailwindcss and Node.js.</p>
                </div>

                 <div className="service-card">
                    <h3 >Graphic Design</h3>
                    <p>Creative branding, logos, posters and social media graphics tailored to your needs.</p>
                </div>

                 <div className="service-card">
                    <h3 >IT Support</h3>
                    <p>Basic tech support, troubleshooting, and system maintenance for small businesses.</p>
                </div>
            </div>
        
        </section>
    )
}
export default Services