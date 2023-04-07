import React, { useState, useEffect } from 'react';
import '../styles/navbar.css';

const Navbar = ({ scrollToSection }) => {
  const [mobileNavIsVisible, setMobileNavIsVisible] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavIsVisible(!mobileNavIsVisible);
  };

  const scrollToSectionFromMobileNav = section => {
    setMobileNavIsVisible(false);
    scrollToSection(section);
  };

  const handleResize = () => {
    if (window.innerWidth > 800) {
      setMobileNavIsVisible(false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
  });

  return (
    <div className="nav-container">
      <nav>
        <img id="logo" src="assets/img/red-echoes-logo.png" />
        <img id="mobile-logo" src="assets/img/red-echoes-logo.png" />
        <div className="nav-links-container">
          <span onClick={() => scrollToSection(0)}>Live Videos</span>
          <span onClick={() => scrollToSection(1)}>Schedule</span>
          <span onClick={() => scrollToSection(2)}>Music</span>
          <span onClick={() => scrollToSection(2)}>Contact Us</span>
        </div>
        <img
          src="assets/img/red-hamburger-menu.png"
          className="mobile-nav-icon"
          onClick={toggleMobileNav}
        />
        {mobileNavIsVisible && (
          <div className="mobile-nav-menu">
            <div className="mobile-nav-links-container">
              <span onClick={() => scrollToSectionFromMobileNav(0)}>
                Live Videos
              </span>
              <span onClick={() => scrollToSectionFromMobileNav(1)}>
                Schedule
              </span>
              <span onClick={() => scrollToSectionFromMobileNav(2)}>Music</span>
              <span onClick={() => scrollToSectionFromMobileNav(2)}>
                Contact Us
              </span>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
