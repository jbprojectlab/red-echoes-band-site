import React, { forwardRef } from 'react';
import '../styles/live-videos.css';
import YouTubeVideoPlayer from './video-player';

const LiveVideos = forwardRef((props, ref) => (
  <div className="section live-videos" ref={ref}>
    <div className="live-video-header">
      <h3>Stormy Monday</h3>
      <span>Blues and Brews - 3/30/23</span>
    </div>
    <div className="video-wrapper">
      <YouTubeVideoPlayer videoId="Bp6nJi_efGI" />
    </div>
  </div>
));

export default LiveVideos;
