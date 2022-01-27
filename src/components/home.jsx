import React from 'react';

const Home = () => (
  <div>
    <h3 className="fs-32 lighter center-text" role="banner">
      Seven soundZ, Seven styleZ
    </h3>
    <div className="video-wrapper">
      <video
        src="/assets/img/s7-animation.mov"
        width="1080"
        playsInline
        autoPlay
        muted
        loop
      />
    </div>
  </div>
);

export default Home;
