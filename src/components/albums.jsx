import React from 'react';
import Album from './album';

const Albums = ({artist, albumTitles}) => {
  return (
    <div>
      {albumTitles.map((title, idx) => (
        <Album key={idx + Math.random()} artist={artist} title={title} />
      ))}
    </div>
  );
};

export default Albums;
