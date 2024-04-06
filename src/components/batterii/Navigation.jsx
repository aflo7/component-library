// import React from 'react'
import './batterii.scss';
import { TbMenuDeep } from 'react-icons/tb';
// import logo from './logo.png';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="batterii-wrapper">
     

     <Link to="/">
        <div className='back-link-wrapper'>

        <div className="back-link">Go back</div>
        </div>
      </Link>
      <div className="nav-wrapper">
        <nav>
          <p className="batterii-text">Batterii</p>

          <div className="tbmenu-wrapper">
            <TbMenuDeep className="tb-icon" />
          </div>

          <div className="start-now-wrapper">Start Now</div>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
