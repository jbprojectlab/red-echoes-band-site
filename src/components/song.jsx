import React, {useRef} from 'react';
import {Howl, Howler} from 'howler';
import '../css/song.css';
const stopCurrentlyPlayingSongs = () => {
  Howler._howls.forEach(howl => {
    if(howl.playing()) howl.stop()
  })
}

const Song = ({title, src, length}) => {
  Howler.autoUnlock = false;
  const options = {src, html5: true, preload: true, paused: true}
  const imgRef = useRef('pause');
  let sound = new Howl(options);
  const toggleSongState = () => {
    stopCurrentlyPlayingSongs()
    sound = sound || new Howl(options);
    if (sound.playing()) {
      sound.pause();
    } else {
      console.log(Howler)
      sound.play();
    }
  };
  const playSong = () => {
    toggleSongState();
    imgRef.current.src = imgRef.current.src.includes(
      `/assets/img/play-circle-fill.png`
    )
      ? `/assets/img/pause-circle-fill.png`
      : `/assets/img/play-circle-fill.png`;
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
