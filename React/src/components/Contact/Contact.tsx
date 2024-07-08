import React, { FC } from 'react';
import './Contact.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Contact: React.FC = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>Get in touch with the team behind the Garbage Classification project.</p>

      {/* Additional contact information */}
      <section className="contact-content">
        <h2>Reach Out</h2>
        <p>If you have any questions, suggestions, or feedback, please don't hesitate to reach out to us. We value your input and are here to help.</p>

        <h2>Contact Information</h2>
        <div className="contact-info">
          <p>
            <FontAwesomeIcon icon={faEnvelope} /> Email: <a href="mailto:info@garbageclassifier.com">info@garbageclassifier.com</a>
          </p>
          <p>
            <FontAwesomeIcon icon={faPhone} /> Phone: (123) 456-7890
          </p>
          <p>
            <FontAwesomeIcon icon={faMapMarkerAlt} /> Address: 123 Green Way, Eco City, Earth
          </p>
        </div>

        <h2>Follow Us</h2>
        <p>Stay connected with us through social media:</p>
        <div className="social-icons">
          <a href="https://twitter.com/garbageclassifier" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a href="https://facebook.com/garbageclassifier" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="https://instagram.com/garbageclassifier" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
