import React, {useRef} from 'react';
import {Howl, Howler} from 'howler';
import '../css/song.css';
import {stopCurrentlyPlayingSongs} from '../constants/utilities'

const Song = ({title, src, length}) => {
  Howler.autoUnlock = false;
  const options = {
    src,
    html5: true,
    preload: true,
    paused: true,
    onstop: () => togglePlayButton(),
  };
  let sound = new Howl(options);
  const imgRef = useRef('pause');

  const toggleSongState = () => {
    sound = sound || new Howl(options);
    stopCurrentlyPlayingSongs(sound);
    if (sound.playing()) {
      sound.pause();
    } else {
      sound.play();
    }
  };

  const togglePlayButton = () => {
    imgRef.current.src = sound.playing()
      ? `/assets/img/pause-circle-fill.png`
      : `/assets/img/play-circle-fill.png`;
  };

  const playSong = () => {
    toggleSongState();
    togglePlayButton();
  };

  return (
    <div className="song bg-blk white brdr-white flex align-ctr space-bw pdg-40">
      <span>
        <h4>{title}</h4>
        <p className="lighter">{length}</p>
      </span>
      <button
        className={`play-btn bg-gray white brdr-white`}
        onClick={playSong}
      >
        <img ref={imgRef} src={`/assets/img/play-circle-fill.png`} />
      </button>
    </div>
  );
};

export default Song;
