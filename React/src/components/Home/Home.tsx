import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <h1>Welcome to the Garbage Classification App</h1>
      <p>Use this app to classify garbage efficiently.</p>
      
      {/* Embed the YouTube video here */}
      <div className="video-container">
        <div className="video-wrapper">
          <iframe 
            className="video"
            src="https://www.youtube.com/embed/D3Dx3xXxpJQ"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Garbage Classification Video"
          ></iframe>
        </div>
      </div>

      {/* Link to the classify page */}
      <div>
        <Link to="/parent" className="classify-button">Recycling Now</Link>
      </div>

      {/* Additional information section */}
      <section className="info-section">
        <h2>Why Classify Garbage?</h2>
        <p>Proper garbage classification is crucial for effective waste management.</p>
        <p> It helps in recycling materials, reducing landfill waste, and protecting our environment.</p>
        <p> By using our app, you contribute to a cleaner and more sustainable planet.</p>
      </section>
    </div>
  );
};

export default Home;
