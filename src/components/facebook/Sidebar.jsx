// import React from 'react'
import './facebook.scss';
import { IoIosSettings } from 'react-icons/io';
import { IoStorefront } from 'react-icons/io5';
import { FaBell } from 'react-icons/fa';
import { MdAllInbox } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { GoPlus } from 'react-icons/go';
import { FiPlus } from 'react-icons/fi';
const Sidebar = () => {
  return (
    <>
      <Link to="/">
        <div className="back-link-wrapper">
          <div className="back-link">Go back</div>
        </div>
      </Link>
      <div className="facebook-wrapper">
        <div className="marketplace-sidebar">
          <div className="marketplace-top-bar">
            <h1>Marketplace</h1>
            <div className="marketplace-icon-wrapper">
              <IoIosSettings className="marketplace-icon" />
            </div>
          </div>
          <div>
            <input
              type="text"
              className="search"
              placeholder="Search Marketplace"
            />
          </div>

          <div className="marketplace-select">
            <div className="browse-all marketplace-icon-wrapper">
              <IoStorefront className="marketplace-icon" />
            </div>
            <div>Browse all</div>
          </div>

          <div className="marketplace-select">
            <div className="marketplace-icon-wrapper">
              <FaBell className="marketplace-icon" />
            </div>
            <div>Notifications</div>
          </div>

          <div className="marketplace-select">
            <div className="marketplace-icon-wrapper">
              <MdAllInbox className="marketplace-icon" />
            </div>

            <div>Inbox</div>
          </div>

          <button className="create-listing-btn">
            <FiPlus className="create-icon" />
            Create new listing
          </button>
          <button className="create-multiple-listings-btn">
            Create multiple listings
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
