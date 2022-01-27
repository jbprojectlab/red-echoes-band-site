import React from 'react';
import { Link } from 'react-router-dom';
import artists from '../constants/artists';

const Navbar = () => (
  <div className="bg-blk">
    <ul className="flex flex-grow space-bw mrg-0 pdg-40">
      {artists.map(({ name }, idx) => (
        <li className="flex h-100-pct center-items" key={idx + Math.random()}>
          <Link to={`/${name}`} className="nav-link grow">
            {name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Navbar;
