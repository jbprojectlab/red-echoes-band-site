import React from 'react';
import Albums from './albums';
import {getAlbumTitles} from '../constants/utilities';

const Artist = ({name}) => {
  const albumTitles = getAlbumTitles(name);
  return (
    <div className="top-margin pdg-20">
      <h3 className="fs-32 lighter" role="banner">{name}</h3>
      <Albums artist={name} albumTitles={albumTitles} />
    </div>
  );
};

export default Artist;
