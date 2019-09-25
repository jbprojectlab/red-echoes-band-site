import React from 'react';
import Song from './song'
import {getAlbum} from '../constants/utilities'

const Album = ({artist, title}) => {
  const songs = getAlbum(artist, title)
  return (
    <div>
      <h4>{title}</h4>
      {songs.map(({title, src, length}) => <Song title={title} src={src} length={length} />)}
    </div>
  );
}
 
export default Album;