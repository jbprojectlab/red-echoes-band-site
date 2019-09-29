import React from 'react';
import Albums from './albums';
import {getAlbumTitles} from '../constants/utilities';

const Artist = ({name}) => {
  const albumTitles = getAlbumTitles(name);
  return (
    <div className="top-margin">
      <h4 className="fs-24">{name}</h4>
      <Albums artist={name} albumTitles={albumTitles} />
    </div>
  );
};

export default Artist;
