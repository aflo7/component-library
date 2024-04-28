import React from 'react';
import ebay from './assets/ebay.jpeg';
import styles from './css/ebay.module.scss';
import ebayLogo from './assets/ebay-logo.jpeg';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Featured = () => {
  return (
    <>
      <div className="back-link-wrapper">
        <Link to="/">
          <div className="back-link">Go back</div>
        </Link>
      </div>
      <Link className={styles.ebayLink} to="/" >
      <div className={styles.featuredWrapper}>
        <img src={ebay} className={styles.img} />

        <div className={styles.bottomText}>
          <p className={styles.featuredText}>Featured</p>
          <img className={styles.ebayLogo} src={ebayLogo} />

          <p>Deals made easy all year long.</p>
          <div className={styles.getYourThing}>
            Get your thing <HiOutlineArrowRight  className={styles.rightArrow}/>
          </div>
        </div>
      </div>
      </Link>
    </>
  );
};

export default Featured;
