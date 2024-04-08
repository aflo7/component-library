import React from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { LuShoppingCart, LuPhoneCall } from 'react-icons/lu';
import './sohars.scss';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="sohars-wrapper">
      {/* Sohar */}
      <Link to="/">
        <div className="back-link-wrapper">
          <div className="back-link">Go back</div>
        </div>
      </Link>
      <div className="nav-wrapper">
        <nav>
          <div className="left-nav">
            <RxHamburgerMenu className="burger-menu" />
            <img
              className="sohars-logo"
              src="https://www.sohars.com/static/version1705030260/frontend/Ecommerce121/Sohars/en_US/images/logo.svg"
            />
          </div>

          <div className="right-nav">
            <div>
              <LuPhoneCall className="phone-icon" />
              <p className='support-text'>Support</p>
            </div>
            <div>
              <LuShoppingCart className="cart-icon" />
              <p className='cart-text'>Cart</p>

            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
