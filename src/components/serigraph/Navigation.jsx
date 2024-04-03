import React from 'react';
import './serigraph-navigation.scss';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { IoSearch } from 'react-icons/io5';

const Navigation = () => {
  return (
    <div className="serigraph-wrapper">
      {/* Serigraph */}

      <Link to="/">
        <div className="back-link">Go back</div>
      </Link>

      <nav>
        <img
          className="serigraph-logo"
          src="https://www.serigraph.com/wp-content/uploads/2024/03/S_Logo.png"
        />
        <GiHamburgerMenu className="burger-icon" />


        <div className='search-wrapper'>
          <div className='search-icon-wrapper'>

          <IoSearch className='search-icon'/>
          </div>
          <input className="search-input" type="text" placeholder="Search..." />
        </div>

      </nav>
      <div className='documentation-text'>

        <p>For this component (Serigraph Navigation Component) I used technologies like React JavaScript HTML and CSS. The component is responsive for mobile and desktop devices.</p>
        <p>
        I made the component based on the previous design on Serigraph's website. I used the same logo as on Serigraph's website. I used the same colors as on Serigraph's website. I used a text input which shows on larger devices. I changed the search icon to be on the left side instead of the right side.
        </p>
        <p>
          On small devices, a burger icon shows. On larger devices, the burger icon disappears and a search input is shown.
        </p>
      </div>
    </div>
  );
};

export default Navigation;
