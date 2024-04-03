import React from 'react';
import './keybank.scss';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoIosArrowDown } from 'react-icons/io';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="keybank-wrapper">
      {/* Keybank */}

      <Link to="/">
        <div className="back-link">Go back</div>
      </Link>

      <div className="top-nav">
        <div className="keybank-text-wrapper">
          <p>KeyBank Services</p>

          <IoIosArrowDown className="down-arrow" />
        </div>

        <button className="sign-on-btn">Sign On</button>
      </div>
      <nav>
        <img
          className="keybank-logo"
          src="https://www.key.com/content/experience-fragments/kco/header/personal/_jcr_content/header/logo.coreimg.svg/1711375020955/kb-logo.svg"
        />

        <RxHamburgerMenu className="burger-icon" />
      </nav>
    </div>
  );
};

export default Navigation;
