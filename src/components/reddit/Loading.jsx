import React from 'react';
import theLogo from './logo.png';
import styles from './loading.module.scss';
import { Link } from 'react-router-dom';

const Loading = () => {
  return (
    <>
      <Link to="/">
        <div className="back-link-wrapper">
          <div className="back-link">Go back</div>
        </div>
      </Link>
      <div>
        <div className={styles.loadingWrapper}>
          <img className={styles.logo} src={theLogo} />
          <div
            className={`border-circle fadeout animation-duration-1000 animation-iteration-infinite flex align-items-center justify-content-center
          font-bold bg-primary border-round px-5 py-3 ${styles.gridChild}`}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Loading;
