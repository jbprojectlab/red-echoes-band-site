import React from 'react';
import {Link} from 'react-router-dom'
import artists from '../constants/artists'

const Navbar = () => {
  return (  
    <div>
      {artists.map(({name}, idx) => (
        <Link
          to={`/${name}`}
          key={idx + Math.random()}
        >{name}</Link>
      ))}
    </div>
  );
}

export default Navbar;