import React from 'react';
import Artist from './artist';
import artists from '../constants/artists'

const Musik = () => {
  return (
    <div>
      <h3>MusiK</h3>
      {artists.map(({name, idx}) => <Artist key={name + idx} name={name} />)}
    </div>
  );
};

export default Musik;
