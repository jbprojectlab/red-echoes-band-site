import React from 'react';
import Album from './album'

const Albums = ({artist, albums}) => {
  return (
    <div>
      {albums.map((album) => <Album artist={artist} title={album} />)}
    </div>
  );
}
 
export default Albums;