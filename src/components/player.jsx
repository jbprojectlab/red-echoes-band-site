import React, { useState } from 'react';
import ReactHowler from 'react-howler';
import Song from './song';
import '../styles/player.css';

const pauseButton = '/assets/img/pause-circle-fill.svg';
const playButton = '/assets/img/play-circle-fill.svg';

const Player = ({ artist, title, songs }) => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  console.log('songs:  ', songs);

  const playSong = trackIndex => {
    if (typeof trackIndex === 'number' && trackIndex !== currentTrackIndex) {
      setCurrentTrackIndex(trackIndex);
    }
    setIsPlaying(true);
  };

  const pauseSong = () => {
    setIsPlaying(false);
  };

  const skipToPreviousSong = () => {
    let previousTrackIndex = currentTrackIndex > 0 ? currentTrackIndex - 1 : 0;

    setCurrentTrackIndex(previousTrackIndex);
    setIsPlaying(true);
  };

  const skipToNextSong = () => {
    let nextTrackIndex =
      currentTrackIndex < songs.length - 1
        ? currentTrackIndex + 1
        : songs.length - 1;

    setCurrentTrackIndex(nextTrackIndex);
    setIsPlaying(true);
  };

  const previousButtonState =
    currentTrackIndex === 0 ? 'disabled-player-btn' : '';

  const nextButtonState =
    currentTrackIndex === songs.length - 1 ? 'disabled-player-btn' : '';

  return (
    <div>
      <div className="flex align-ctr space-bw pdg-40">
        <div className="player-song-info">
          <h4 data-testid="album-title" className="fs-24 italic lighter mrg-0">
            {title}
          </h4>
          <p>
            {currentTrackIndex + 1}. {songs[currentTrackIndex].title}
          </p>
          <p>{songs[currentTrackIndex].length}</p>
        </div>
        <ReactHowler src={songs[currentTrackIndex].src} playing={isPlaying} />
        <div className="player flex">
          <img
            className={`player-btn ${previousButtonState}`}
            src="/assets/img/skip-previous-circle-fill.svg"
            onClick={skipToPreviousSong}
          />
          {isPlaying ? (
            <img className="player-btn" src={pauseButton} onClick={pauseSong} />
          ) : (
            <img className="player-btn" src={playButton} onClick={playSong} />
          )}
          <img
            className={`player-btn ${nextButtonState}`}
            src="/assets/img/skip-next-circle-fill.svg"
            onClick={skipToNextSong}
          />
        </div>
      </div>
      {songs.map(({ title, length }, idx) => (
        <Song
          key={idx + Math.random()}
          trackIndex={idx}
          title={title}
          length={length}
          currentTrackIndex={currentTrackIndex}
          playSong={playSong}
          pauseSong={pauseSong}
          isPlaying={isPlaying}
        />
      ))}
    </div>
  );
};

export default Player;
