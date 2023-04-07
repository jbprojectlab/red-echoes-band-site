import React, { useRef, Fragment } from 'react';
import '../styles/app.css';
import Navbar from './navbar';
import LiveVideos from './live-videos';
import Schedule from './schedule';
import Music from './music';
import ContactUs from './contact-us';
import Footer from './footer';

const App = () => {
  const liveVideosRef = useRef(null);
  const scheduleRef = useRef(null);
  const musicRef = useRef(null);
  const contactUsRef = useRef(null);

  const scrollRefs = [liveVideosRef, scheduleRef, musicRef, contactUsRef];
  const scrollToRef = section =>
    scrollRefs[section].current.scrollIntoView({ behavior: 'smooth' });

  return (
    <Fragment>
      <Navbar scrollToSection={scrollToRef} />
      <div className="content-boxes-container">
        <LiveVideos ref={liveVideosRef} />
        <Schedule ref={scheduleRef} />
        <Music ref={musicRef} />
        <ContactUs ref={contactUsRef} />
      </div>
      <Footer />
    </Fragment>
  );
};

export default App;
