import React, { FC } from 'react';
import './About.scss';

const About: React.FC = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>Learn more about the Garbage Classification project.</p>

      {/* Additional about text */}
      <section className="about-content">
        <h2>Our Mission</h2>
        <p>Our mission is to provide an easy-to-use tool that helps people sort their waste correctly. By doing so, we aim to increase recycling rates, decrease landfill use, and promote a more sustainable way of living.</p>

        <h2>How It Works</h2>
        <p>The Garbage Classification App uses advanced machine learning algorithms to analyze images of waste and classify them into different categories. This ensures that materials can be properly recycled or disposed of in an environmentally friendly manner.</p>

        <h2>Join Us</h2>
        <p>We believe that everyone can make a difference. Join us in our mission to create a cleaner, greener world by using our app and spreading the word about the importance of proper waste management.</p>
      </section>
    </div>
  );
};

export default About;
