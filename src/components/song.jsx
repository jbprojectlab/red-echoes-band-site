import React from 'react';
import {Howl, Howler} from 'howler';

const Song = ({title, src, length}) => {
  const sound = new Howl({src});
  const playSong = () => sound.play();
  return (
    <div>
      <h4>{title}</h4>
      <p>{length}</p>
      <button onClick={playSong}>PLAY</button>
    </div>
  );
};

export default Song;
