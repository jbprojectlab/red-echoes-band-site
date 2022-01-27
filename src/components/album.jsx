import React from 'react';
import Player from './player';
import { getAlbum } from '../constants/utilities';

const Album = props => {
  const { artist, albumTitle } = props.match.params;
  const songs = getAlbum(artist, albumTitle);

  return (
    <div className="brdr-gray">
      <Player artist={artist} title={albumTitle} songs={songs} />
    </div>
  );
};

export default Album;
