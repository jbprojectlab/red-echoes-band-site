import React from 'react';
import {Howl, Howler} from 'howler';
import '../css/song.css';

const Song = ({title, src, length}) => {
  const playSong = () => {
    Howler.unload();
    const sound = new Howl({src});
    sound.play();
  };
  return (
    <div className="song">
      <h4>{title}</h4>
      <p>{length}</p>
      <button className="play-btn" onClick={playSong}>
        PLAY
      </button>
    </div>
  );
};

export default Song;
