import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo-container">
        <div id="footer-logo">
          <img src="assets/img/red-echoes-logo.png" />
        </div>
        <img id="mobile-footer-logo" src="assets/img/red-echoes-logo.png" />
      </div>
      <div className="footer-links-container">
        <span className="copyright-text">&copy; 2022 Red Echoes</span>
      </div>
    </footer>
  );
};

export default Footer;
