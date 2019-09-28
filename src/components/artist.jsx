import React from 'react';
import Albums from './albums'
import {getAlbums} from '../constants/utilities'

const Artist = ({name}) => {
  const albums = getAlbums(name)
  return (
    <div>
      <h4>{name}</h4>
      <Albums artist={name} albums={albums} />
    </div>
  );
}

export default Artist;