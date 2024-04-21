import React from 'react'
import styles from './video.module.css'
import { Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';
import { IoMdFilm } from "react-icons/io";
const VideoEditingBtn = () => {
  return (

    <>
    <Link to="/">
        <div className="back-link-wrapper">
          <div className="back-link">Go back</div>
        </div>
      </Link>
      <div className={styles.btnContainer}>
        <button className={styles.videoBtnWrapper}>
          <IoMdFilm />
          <p>Video editing</p>
          <FaChevronRight className={styles.chevronRight} />
        </button>
      </div>
    </>
  )
}

export default VideoEditingBtn