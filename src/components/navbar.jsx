import React from 'react';
import {Link} from 'react-router-dom';
import artists from '../constants/artists';

const Navbar = () => {
  return (
    <div className="w-100-per flex space-bw pdg-20">
      {artists.map(({name}, idx) => (
        <Link to={`/${name}`} key={idx + Math.random()} className="">
          {name}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
