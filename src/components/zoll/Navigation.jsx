import React from 'react';
import './zoll.scss';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="zoll-wrapper">
      <Link to="/">
        <div className="back-link">Go back</div>
      </Link>
      <nav>
        <img
          className="zoll-logo"
          src="https://www.zoll.com/-/media/uploadedimages/public_site/_global/zoll-ak-logo-web.ashx?h=124&w=282&hash=869C8DA7CAB493F6B344CFDFF52E3777"
        />

        <GiHamburgerMenu className='burger-icon'/>
      </nav>
    </div>
  );
};

export default Navigation;
