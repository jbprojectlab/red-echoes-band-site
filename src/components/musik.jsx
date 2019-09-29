import React from 'react';
import Artist from './artist';
import artists from '../constants/artists';

const Musik = () => {
  return (
    <div>
      <h3 className='center-text lighter underline'>MusiK</h3>
      {artists.map(({name}, idx) => (
        <Artist key={idx + Math.random()} name={name} />
      ))}
    </div>
  );
};

export default Musik;
