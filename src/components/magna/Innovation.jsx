// import React from 'react'
import { Link } from 'react-router-dom';
import './innovation.scss';
const Innovation = () => {
  return (
    <>
      <Link to="/">
        <div className="back-link-wrapper">
          <div className="back-link">Go back</div>
        </div>
      </Link>

      <div className="innovation-wrapper">
        <div className='innovation-card'>
          <p className="innovation-text">Innovation</p>
          <button className='learn-more-btn'>Learn more</button>
        </div>
      </div>
    </>
  );
};

export default Innovation;
