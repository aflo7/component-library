import styles from './adventures.module.css';
import { FaCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Adventures = () => {
  return (
    <>
      <Link to="/">
        {/* <div className="back-link-wrapper"> */}
        <div className="back-link">Go back</div>
        {/* </div> */}
      </Link>

      <div className={styles.adventuresWrapper}>
        <div className={styles.navWrapper}>
          <nav className={styles.nav}>
            <Link className="unstyled-link">
              <div className={styles.logoWrapper}>
                <FaCircle className={styles.faCircleTop} />
                <FaCircle className={styles.faCircleBottom} />
              </div>
            </Link>
            <div className={styles.rightNav}>
              <Link className="unstyled-link">
                <p>Destinations</p>
              </Link>
              <Link className="unstyled-link">
                <p>Sustainability</p>
              </Link>
              <Link className="unstyled-link">
                <p>Register / Login</p>
              </Link>
            </div>
          </nav>
        </div>
        <div className={styles.adventuresWelcomeWrapper}>
          <p className={styles.adventurersWelcomeHeader}>Adventurers welcome</p>
          <p className={styles.escapeText}>
            <Link className='unstyled-link'>2023 escapes</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Adventures;
