import React from 'react';
import Song from './song';
import {getAlbum} from '../constants/utilities';
import '../css/album.css';

const Album = ({artist, title}) => {
  const songs = getAlbum(artist, title);
  return (
    <div>
      <h4 className="album-title fs-24 underline lighter brdr-gray mrg-0 pdg-40">
        {title}
      </h4>
      {songs.map(({title, src, length}, idx) => (
        <Song
          key={idx + Math.random()}
          title={title}
          src={src}
          length={length}
        />
      ))}
    </div>
  );
};

export default Album;
