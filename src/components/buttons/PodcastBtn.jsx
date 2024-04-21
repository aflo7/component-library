import React from 'react';
import { CgMediaPodcast } from 'react-icons/cg';

import { FaChevronRight } from 'react-icons/fa';
import styles from './podcast.module.css';
import { Link } from 'react-router-dom';

const PodcastBtn = () => {
  return (
    <>
      <Link to="/">
        <div className="back-link-wrapper">
          <div className="back-link">Go back</div>
        </div>
      </Link>
      <div className={styles.btnContainer}>
        <button className={styles.podcastBtnWrapper}>
          <CgMediaPodcast />
          <p>Podcasting</p>
          <FaChevronRight className={styles.chevronRight} />
        </button>
      </div>
    </>
  );
};

export default PodcastBtn;
