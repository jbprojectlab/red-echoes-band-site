import React from 'react';
import '../styles/song.css';

const pauseButton = '/assets/img/pause-circle-fill.svg';
const playButton = '/assets/img/play-circle-fill.svg';

const Song = ({
  trackIndex,
  currentTrackIndex,
  title,
  length,
  isPlaying,
  playSong,
  pauseSong,
}) => (
  <div className="song bg-blk white brdr-gray flex align-ctr space-bw pdg-40">
    <span>
      <h4>{title}</h4>
      <p className="lighter">{length}</p>
    </span>
    <div className="player bg-gray white">
      {isPlaying && trackIndex === currentTrackIndex ? (
        <img className="player-btn" src={pauseButton} onClick={pauseSong} />
      ) : (
        <img
          className="player-btn"
          src={playButton}
          onClick={() => playSong(trackIndex)}
        />
      )}
    </div>
  </div>
);

export default Song;
