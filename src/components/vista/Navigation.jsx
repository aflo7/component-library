import React from 'react';
import './vista-navigation.scss';
import { LiaFlagUsaSolid } from "react-icons/lia";
import { Link } from 'react-router-dom';


const Navigation = () => {
  return (
    <div className="vista-wrapper">
      <Link to="/">
      
      <div className='back-link'>Go back</div>
      </Link>
      <nav>
        <img
          className="vista-logo"
          src="https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,w_513/MXP5803-Vista-logo-inverted-001/MXP5803-Vista-logo-inverted-001"
        />

        <div className='right-nav-wrapper'>
          <p>Print</p>
          <p>Design</p>
          <p>Digital</p>
          <LiaFlagUsaSolid className='usa-icon'/>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
