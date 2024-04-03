import React from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import TheLogo from '../../assets/logos.jpeg';
import './avixa-navigation.scss';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="avixa-wrapper">
      <Link to="/">
        <div className="back-link">Go back</div>
      </Link>
      <nav>
        <div>
          <div className="left-nav">
            <RxHamburgerMenu className="burger-icon" />
            <p className="menu-text">Menu</p>
          </div>
        </div>
        <div>
          <img className="avixa-logo" src={TheLogo} />
        </div>

        {/* <p className="avixa-text">Avixa</p> */}
      </nav>
    </div>
  );
};

export default Navigation;
