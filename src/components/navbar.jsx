import React from 'react';
import { Link } from 'react-router-dom';
import artists from '../constants/artists';

const Navbar = () => {
  return (
    <div id="navbar" className="bg-blk">
      <ul className="flex flex-grow space-bw mrg-0 pdg-20">
        {artists.map(({ name }, idx) => (
          <li className="flex h-100-pct center-items">
            <Link
              className="nav-link grow"
              to={`/${name}`}
              key={idx + Math.random()}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
