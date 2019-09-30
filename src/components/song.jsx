import React, {useRef} from 'react';
import {Howl, Howler} from 'howler';
import '../css/song.css';
Howler.autoUnlock = false;

const Song = ({title, src, length}) => {
  const imgRef = useRef('pause')
  let sound = new Howl({src, html5: true, preload: true, paused: true});
  const toggleSongState = () => {
    sound = sound || new Howl({src, html5: true, preload: true, paused: true});
    if (sound.playing()) {
      sound.pause();
    } else {
      sound.play();
    }
  };
  const playSong = () => {
    toggleSongState()
    imgRef.current.src = imgRef.current.src.includes(`/assets/img/play-circle-fill.png`) ? `/assets/img/pause-circle-fill.png` : `/assets/img/play-circle-fill.png`
  }
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
