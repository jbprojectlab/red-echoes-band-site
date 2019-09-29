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
    <div className="song bg-blk white brdr-white flex align-ctr space-bw pdg-40">
      <h4>{title}</h4>
      <p>{length}</p>
      <button className="play-btn bg-gray white brdr-white" onClick={playSong}>
        <img src="/assets/img/play-circle-fill.png" />
      </button>
    </div>
  );
};

export default Song;
