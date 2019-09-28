import React from 'react';
import {connect} from 'react-redux'
import {Howl, Howler} from 'howler'
import '../css/song.css'
import {getSong} from '../store'

const Song = ({title, length, song, getCurrentSong}) => {
  const playSong = () => {
    getCurrentSong(title)
    const {src} = song
    const sound = new Howl({src});
    sound.play();
  }
  return (
    <div className='song'>
      <h4>{title}</h4>
      <p>{length}</p>
      <button className='play-btn' onClick={playSong}>PLAY</button>
    </div>
  );
};

const mapStateToProps = ({songs}) => ({song: songs[0]})

const mapDispatchToProps = (dispatch, ownProps) => ({
  getCurrentSong: title => dispatch(getSong(title))
})

export default connect(mapStateToProps, mapDispatchToProps)(Song)