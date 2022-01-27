import React from 'react';
import Albums from './albums';
import { getArtistAlbums } from '../constants/utilities';

const Artist = ({ name }) => {
  const artistAlbums = getArtistAlbums(name);
  return (
    <div className="brdr-gray">
      <h3 className="pdg-24 fs-32 lighter" role="banner">
        {name}
      </h3>
      <Albums artist={name} artistAlbums={artistAlbums} />
    </div>
  );
};

export default Artist;
