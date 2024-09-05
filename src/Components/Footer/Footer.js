import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
        <br></br><br></br>
        <br></br>
        <br></br>
      <div className="footer-content">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: info@example.com</p>
          <p>Phone: +123456789</p>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <p>Facebook | Twitter | Instagram</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Your Company</p>
      </div>
    </footer>
  );
};

export default Footer;
