// import React from 'react'
import './job-post.scss';
import { RxCross2 } from 'react-icons/rx';
import { Link } from 'react-router-dom';

const JobPost = () => {
  return (
    <>
      <Link to="/">
        <div className="back-link-wrapper">
          <div className="back-link">Go back</div>
        </div>
      </Link>

      <div className="job-post-wrapper">
        <div className="job-post">
          <div className="job-img-wrapper"></div>
          <div className="job-post-right-side">
            <div className="job-title-wrapper">
              <p className="job-title">
                Product/Category Management Internship - Summer 2024
              </p>
              <div className="cross-icon-wrapper">

              <RxCross2 className='cross-icon'/>
              </div>
            </div>
            <p>Company Name</p>
            <p className="job-location-wrapper">City, State</p>
            <div className="school-info-wrapper">
              <div className="school-wrapper"></div>
              <p>0 school alumni work here</p>
            </div>
            <p className="posted-date">1 month ago</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobPost;
