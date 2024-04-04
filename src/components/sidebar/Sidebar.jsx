import React from 'react';
import {
  AiOutlineDelete,
  AiOutlineHome,
  AiOutlineSearch,
  AiOutlineFolderAdd,
  AiOutlineLogout
} from 'react-icons/ai';
import './sidebar.scss';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar-wrapper">
      {/* Sidebar */}
      <Link to="/">
        <div className="back-link">Go back</div>
      </Link>

      <div className="sidebar">
        <div
        // className={`${
        //     view == "Home"
        //         ? "sidebar-button sidebar-button-selected"
        //         : "sidebar-button"
        // }`}
        // onClick={() => setView("Home")}
        >
          <AiOutlineHome className="sidebar-icon" />
          <div className='sidebar-text' style={{ paddingLeft: '10px' }}>Home</div>
        </div>
        <div
        // className={`${
        //     view == "Search"
        //         ? "sidebar-button sidebar-button-selected"
        //         : "sidebar-button"
        // }`}
        // onClick={() => setView("Search")}
        >
          <AiOutlineSearch className="sidebar-icon" />
          <div className='sidebar-text' style={{ paddingLeft: '10px' }}>Search</div>
        </div>
        <div
        // className={`${
        //     view == "Create"
        //         ? "sidebar-button sidebar-button-selected"
        //         : "sidebar-button"
        // }`}
        // onClick={() => setView("Create")}
        >
          <AiOutlineFolderAdd className="sidebar-icon" />
          <div className='sidebar-text' style={{ paddingLeft: '10px' }}>Create</div>
        </div>
        <div
        // className={`${
        //     view == "Delete"
        //         ? "sidebar-button sidebar-button-selected"
        //         : "sidebar-button"
        // }`}
        // onClick={() => setView("Delete")}
        >
          <AiOutlineDelete className="sidebar-icon" />
          <div className='sidebar-text' style={{ paddingLeft: '10px' }}>Delete</div>
        </div>
        <div
        // className="sidebar-button"
        // onClick={() =>
        //     logout({
        //         logoutParams: {
        //             returnTo: window.location.origin
        //         }
        //     })
        // }
        >
          <AiOutlineLogout className="sidebar-icon" />
          <div className='sidebar-text' style={{ paddingLeft: '10px' }}>Logout</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
