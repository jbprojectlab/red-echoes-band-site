import React from 'react';
import {Howl, Howler} from 'howler';

const Song = ({title}) => {
  const sound = new Howl({
    src: ['/assets/songs/QOND.wav'],
  });
  const playSong = () => sound.play();
  return (
    <div>
      <h4>{title}</h4>
      <button onClick={playSong}>PLAY</button>
    </div>
  );
};

export default Song;
