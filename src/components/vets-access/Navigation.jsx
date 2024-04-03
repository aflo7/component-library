import React from 'react';
import './vets-access-navigation.scss';
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn
} from 'react-icons/fa';
import { GoMail } from 'react-icons/go';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="vets-access-wrapper">
      {/* Vets Access */}
      <Link to="/">
      
      <div className='back-link'>Go back</div>
      </Link>
      <nav>
        <h1>810-213-6344</h1>
        <GiHamburgerMenu className="burger-menu" />
      </nav>
      <div className="bottom-nav">
        <div className="vets-access-img-wrapper">
          <img
            className="vets-access-img"
            src="https://www.vetsaccessllc.com/uploads/1/3/0/3/130367616/editor/vets-logo-3-inches-long.png?1582212936"
          />
        </div>
        <div>
          <div className="icon-wrapper">
            <FaFacebookF />
            <FaInstagram />
            <FaLinkedinIn />
            <GoMail />
            <FaTwitter />
          </div>
          <div>Fax: 810-213-0131</div>
          <div className="the-email">va.solutions@vetsaccessllc.com</div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
