import React from 'react';
import YouTube from 'react-youtube';

const YouTubeVideoPlayer = ({ videoId }) => {
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handlePlayerReady = evt => {
    evt.target.pauseVideo();
  };

  return <YouTube videoId={videoId} opts={opts} onReady={handlePlayerReady} />;
};

export default YouTubeVideoPlayer;
