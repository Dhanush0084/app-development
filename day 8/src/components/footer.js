import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faFacebook,
  faTwitter,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import {
  faFileAlt, // Icon for Terms and Conditions
  faQuestionCircle, // Icon for FAQ
  faShieldAlt, // Icon for Privacy Policy
} from '@fortawesome/free-solid-svg-icons';

import '../assets/css/footer.css'; // Import your CSS file

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        {/* Footer Links */}
        <a href="/terms">
          <FontAwesomeIcon icon={faFileAlt} /> Terms and Conditions
        </a>
        <a href="/faq">
          <FontAwesomeIcon icon={faQuestionCircle} /> FAQ
        </a>
        <a href="/privacy">
          <FontAwesomeIcon icon={faShieldAlt} /> Privacy Policy
        </a>
      </div>
      <div className="footer-social">
        {/* Social Media Icons */}
        <a href="https://www.instagram.com">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://www.facebook.com">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://www.twitter.com">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://www.linkedin.com">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
      <div className="footer-text">
        &copy; {new Date().getFullYear()} Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
