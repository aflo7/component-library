import React from 'react';
import './magna.scss';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="magna-wrapper">
      <Link to="/">
        <div className="back-link">Go back</div>
      </Link>
      <nav>
        <img
          className="magna-logo"
          src="https://www.magna.com/ResourcePackages/HighroadFramework/dist/images/logo_Magna-white.svg"
        />

        <RxHamburgerMenu className="burger-icon" />
      </nav>
    </div>
  );
};

export default Navigation;
