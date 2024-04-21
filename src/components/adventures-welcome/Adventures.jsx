import styles from './adventures.module.css';
import { FaCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Adventures = () => {
  return (
    <>
      <Link to="/">
        <div className="back-link-wrapper">
          <div className="back-link">Go back</div>
        </div>
      </Link>

      <div className={styles.adventuresWrapper}>
        <div className={styles.navWrapper}>
          <nav className={styles.nav}>
            <div className={styles.logoWrapper}>
              <FaCircle className={styles.faCircleTop} />
              <FaCircle className={styles.faCircleBottom} />
            </div>
            <div className={styles.rightNav}>
              <p>Destinations</p>
              <p>Sustainability</p>
              <p>Register / Login</p>
            </div>
          </nav>
        </div>
        <div className={styles.adventuresWelcomeWrapper}>
          <p className={styles.adventurersWelcomeHeader}>Adventurers welcome</p>
          <p className={styles.escapeText}>2023 escapes</p>
        </div>
      </div>
    </>
  );
};

export default Adventures;
