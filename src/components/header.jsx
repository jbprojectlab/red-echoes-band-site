import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div id="header" className="flex center-items center-text bg-gray">
    <Link to="/">
      <img src="/assets/img/seizmik7-main-logo-prpl.png" />
    </Link>
  </div>
);

export default Header;
