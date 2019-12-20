import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div id="header" className="flex center-items center-text bg-gray">
      <Link to="/">
        <h2 className="h-100-pct white fs-32 mrg-0 grow">seiZmiK 7</h2>
      </Link>
    </div>
  );
};

export default Header;
