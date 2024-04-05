import React from 'react';
import './beehex.scss';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="beehex-wrapper">
       <Link to="/">
        <div className='back-link-wrapper'>

        <div className="back-link">Go back</div>
        </div>
      </Link>

      <div className="nav-wrapper">
        <nav>
          <img
            className="beehex-logo"
            src="https://static.wixstatic.com/media/bcbf64_736ad91893ca43ac912d73025b9b78a4~mv2.png/v1/fill/w_392,h_130,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Asset%201CWB_Disablestext_Backplate.png"
          />

          <div className="right-nav">
            <p>Mock</p>
            <p>Mock</p>
            <p>Mock</p>
            <p>Mock</p>
            <p>Mock</p>
            <p>Mock</p>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
