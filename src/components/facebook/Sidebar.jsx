// import React from 'react'
import './facebook.scss';
import { IoIosSettings } from 'react-icons/io';
import { IoStorefront } from 'react-icons/io5';
import { FaBell } from 'react-icons/fa';
import { MdAllInbox } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="facebook-wrapper">
      <div className="marketplace-sidebar">
        <div className="marketplace-top-bar">
          <h1>Marketplace</h1>
          <IoIosSettings className='marketplace-icon'/>
        </div>
        <div>
          <input type='text' className='search' placeholder='Search Marketplace' />
        </div>

        <div className='marketplace-select'>
          <IoStorefront className='marketplace-icon'/>
          <div>Browse all</div>
        </div>

        <div className='marketplace-select'>
          <FaBell className='marketplace-icon'/>
          <div>Notifications</div>
        </div>

        <div className='marketplace-select'>
          <MdAllInbox className='marketplace-icon'/>
          <div>Inbox</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
