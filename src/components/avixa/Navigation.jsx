import React from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import TheLogo from '../../assets/logos.jpeg';
import './avixa-navigation.scss';

const Navigation = () => {
  return (
    <div className="avixa-wrapper">
      <nav>
        <div>
          <div className="left-nav">
            <RxHamburgerMenu className="burger-icon" />
            <p className='menu-text'>Menu</p>
          </div>
        </div>
        <div>
          <img className='avixa-logo' src={TheLogo} />
        </div>

        {/* <p className="avixa-text">Avixa</p> */}
      </nav>
    </div>
  );
};

export default Navigation;
